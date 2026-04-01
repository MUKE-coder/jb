"use client";
import { Check } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PricingTier {
  name: string;
  description: string;
  priceUGX: number;
  priceUSD: number;
  features: string[];
  popular?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for developers just starting their career journey",
    priceUGX: 100000,
    priceUSD: 27,
    features: [
      "2 one-on-one sessions per month",
      "Access to weekly group calls",
      "Career roadmap planning",
      "Resume and LinkedIn review",
      "Email support",
      "Access to resource library",
    ],
    cta: "Start Learning",
  },
  {
    name: "Professional",
    description: "Ideal for developers looking to advance their careers",
    priceUGX: 200000,
    priceUSD: 55,
    features: [
      "4 one-on-one sessions per month",
      "Priority access to group calls",
      "Monthly workshop access",
      "Code review sessions",
      "Interview preparation",
      "Salary negotiation guidance",
      "24/7 chat support",
      "Personal project mentoring",
    ],
    popular: true,
    cta: "Accelerate Growth",
  },
  {
    name: "Team",
    description: "Comprehensive mentorship for senior developers and teams",
    priceUGX: 600000,
    priceUSD: 164,
    features: [
      "Unlimited one-on-one sessions",
      "Exclusive monthly workshops",
      "Team mentorship sessions",
      "Technical architecture guidance",
      "Leadership development",
      "Custom training programs",
      "Direct phone/WhatsApp access",
      "Career transition support",
      "Industry networking introductions",
    ],
    cta: "Go Team",
  },
];

export function PricingSection() {
  const [currency, setCurrency] = useState<"UGX" | "USD">("UGX");

  const formatPrice = (priceUGX: number, priceUSD: number) => {
    if (currency === "UGX") {
      return `UGX ${priceUGX.toLocaleString()}`;
    }
    return `$${priceUSD}`;
  };

  return (
    <section id="packages" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge className="mb-4">Mentorship Packages</Badge>
          <h2 className="mb-6 text-4xl md:text-5xl">
            Choose your{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              growth path
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Select the mentorship package that best fits your career goals and
            let&apos;s build your future together.
          </p>

          {/* Currency Toggle */}
          <div className="mb-12 flex items-center justify-center gap-4">
            <span
              className={`transition-colors ${currency === "UGX" ? "" : ""}`}
            >
              UGX
            </span>
            <button
              onClick={() => setCurrency(currency === "UGX" ? "USD" : "UGX")}
              className="relative h-7 w-14 rounded-full bg-gray-700 transition-colors focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <div
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-transform ${
                  currency === "USD" ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`transition-colors ${currency === "USD" ? "text-white" : "text-gray-400"}`}
            >
              USD
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative transition-all duration-300 ${
                tier.popular ? "scale-105 ring" : ""
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {tier.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    {formatPrice(tier.priceUGX, tier.priceUSD)}
                  </span>
                  <span className="ml-2 text-muted">/month</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4">
                  <Button className={`w-full`} size="lg">
                    {tier.cta}
                  </Button>

                  <Button variant="outline" className="w-full">
                    Book a Quick Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl">
              Not sure which package is right for you?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Let&apos;s have a quick 15-minute call to discuss your goals and
              find the perfect mentorship package for your career journey.
            </p>
            <Button size="lg" className="px-8">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
