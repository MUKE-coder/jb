"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import {
  type BookingInput,
  bookingSchema,
  CONTACT_METHODS,
  SESSION_TYPES,
} from "./schema";

const todayIso = () => new Date().toISOString().slice(0, 10);

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      sessionType: "one-on-one",
      preferredDate: "",
      alternateDate: "",
      topic: "",
      notes: "",
      preferredContact: "email",
    },
  });

  async function onSubmit(values: BookingInput) {
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `Request failed: ${res.status}`);
      }

      setSubmitted(true);
      form.reset();
      toast.success("Booking request sent! JB will reply within 24 hours.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toast.error(`Couldn't send booking request: ${message}`);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-edge bg-zinc-50/40 p-6 text-center dark:bg-zinc-900/40"
      >
        <h3 className="text-xl font-semibold">Booking request sent ✓</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          JB has been notified by email. You&apos;ll get a reply within 24
          hours, usually faster.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setSubmitted(false)}
        >
          Send another request
        </Button>
      </div>
    );
  }

  const submitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        {/* Session type — radio cards */}
        <FormField
          control={form.control}
          name="sessionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Session type</FormLabel>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SESSION_TYPES.map((s) => {
                  const checked = field.value === s.id;
                  return (
                    <label
                      key={s.id}
                      className={cn(
                        "group/option cursor-pointer rounded-lg border border-edge p-4 transition-colors",
                        checked
                          ? "border-foreground bg-zinc-50 dark:bg-zinc-900"
                          : "hover:bg-zinc-50/40 dark:hover:bg-zinc-900/40"
                      )}
                    >
                      <input
                        type="radio"
                        name={field.name}
                        value={s.id}
                        checked={checked}
                        onChange={() => field.onChange(s.id)}
                        className="sr-only"
                      />
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-medium">{s.label}</span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {s.durationLabel}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {s.description}
                      </p>
                    </label>
                  );
                })}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Name + email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Doe"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Phone + country */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone / WhatsApp</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+256 762 063 160"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Country / city{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Kampala, Uganda"
                    autoComplete="country-name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred date</FormLabel>
                <FormControl>
                  <Input type="date" min={todayIso()} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alternateDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Alternate date{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" min={todayIso()} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Topic */}
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What would you like to cover?</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Building a Go API with Gin and GORM, Career advice for transitioning to Go"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Notes */}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Anything else?{" "}
                <span className="text-muted-foreground">(optional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Background, goals, code links, time-zone constraints, etc."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Preferred contact */}
        <FormField
          control={form.control}
          name="preferredContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How should JB reply?</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pick a contact method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CONTACT_METHODS.map((m) => (
                    <SelectItem key={m} value={m} className="capitalize">
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="self-start"
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send booking request"
          )}
        </Button>

        <p className="font-mono text-xs text-muted-foreground">
          By submitting, you agree to be contacted by JB at the email/phone you
          provided. JB never shares your details with third parties.
        </p>
      </form>
    </Form>
  );
}
