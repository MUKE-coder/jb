"use client";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

import { Separator } from "../page";

export default function DatabaseFormatter() {
  const [inputString, setInputString] = useState("");
  const [databaseUrl, setDatabaseUrl] = useState("");
  const [dbParams, setDbParams] = useState({
    connection: "pgsql",
    host: "",
    port: "5432",
    database: "",
    username: "",
    password: "",
  });

  const extractEndpoint = (host: string) => {
    const match = host.match(/ep-[a-zA-Z0-9-]+/);
    return match ? match[0] : "";
  };

  const formatConnectionString = () => {
    try {
      // Parse the connection string
      const url = new URL(inputString);
      const username = url.username;
      const password = url.password;
      const hostname = url.hostname;
      const database = url.pathname.replace("/", "");
      const searchParams = new URLSearchParams(url.search);

      // Extract endpoint from host
      const endpoint = extractEndpoint(hostname);

      // Format for Option 1: DATABASE_URL
      const formattedUrl = `postgresql://${username}:${password}@${hostname}:${url.port || 5432}/${database}?sslmode=require&pgbouncer=true&connect_timeout=10`;
      const databaseUrlWithEndpoint = formattedUrl.replace(
        `${username}:${password}`,
        `${username}:endpoint=${endpoint};${password}`
      );
      setDatabaseUrl(databaseUrlWithEndpoint);

      // Format for Option 2: Parameters
      setDbParams({
        connection: "pgsql",
        host: hostname,
        port: url.port || "5432",
        database: database,
        username: username,
        password: `endpoint=${endpoint};${password}`,
      });
    } catch (error) {
      toast.error("Invalid connection string. Please check the format.");
      console.error(error);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <Separator />
      <div className="container mx-auto max-w-4xl p-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Extract Credentials from Neon to Laravel</CardTitle>
            <CardDescription>
              Paste your Neon database connection string below to extract and
              format it for Laravel.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="connection-string">Neon Connection String</Label>
              <Textarea
                id="connection-string"
                placeholder="postgresql://neondb_owner:npg_qODmkItxJ8Z5@ep-bitter-unit-agyg01bt-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                className="min-h-[100px] font-mono"
              />
            </div>

            <Button
              onClick={formatConnectionString}
              className="h-12 w-full rounded-xl"
            >
              Extract & Format
            </Button>

            <Tabs defaultValue="url" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="url">DATABASE_URL</TabsTrigger>
                <TabsTrigger value="parameters">Parameters</TabsTrigger>
              </TabsList>

              <TabsContent value="url">
                <Card>
                  <CardHeader>
                    <CardTitle>DATABASE_URL Format</CardTitle>
                    <CardDescription>
                      Copy this for your Laravel .env file DATABASE_URL variable
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Input
                        value={databaseUrl}
                        readOnly
                        className="font-mono"
                      />
                      <Button
                        onClick={() =>
                          copyToClipboard(`DATABASE_URL="${databaseUrl}"`)
                        }
                        disabled={!databaseUrl}
                      >
                        Copy
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="parameters">
                <Card>
                  <CardHeader>
                    <CardTitle>Parameter Format</CardTitle>
                    <CardDescription>
                      Copy these for your Laravel .env file individual database
                      variables
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(dbParams).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <Label htmlFor={key} className="w-32 capitalize">
                          DB_{key.toUpperCase()}
                        </Label>
                        <Input
                          id={key}
                          value={value}
                          readOnly
                          className="flex-1 font-mono"
                        />
                        <Button
                          onClick={() =>
                            copyToClipboard(
                              `DB_${key.toUpperCase()}=${key === "password" ? `'${value}'` : value}`
                            )
                          }
                          disabled={!value}
                        >
                          Copy
                        </Button>
                      </div>
                    ))}

                    <div className="pt-4">
                      <Button
                        onClick={() => {
                          const allParams = Object.entries(dbParams)
                            .map(
                              ([key, value]) =>
                                `DB_${key.toUpperCase()}=${key === "password" ? `'${value}'` : value}`
                            )
                            .join("\n");
                          copyToClipboard(allParams);
                        }}
                        disabled={!dbParams.host}
                        className="h-12 w-full rounded-xl"
                      >
                        Copy All Parameters
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <Separator />
    </>
  );
}
