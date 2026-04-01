"use client";

import type { ChangeEvent } from "react";
import { forwardRef } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface CurrencyInputProps
  extends Omit<React.ComponentProps<"input">, "value" | "onChange" | "type"> {
  /** Current numeric value. */
  value: number | string;
  /** Called with the parsed numeric value. */
  onChange: (value: number) => void;
  /** Currency prefix label. @default "USD" */
  prefix?: string;
}

function formatWithCommas(val: number | string): string {
  const num = typeof val === "string" ? parseFloat(val) : val;
  if (isNaN(num) || num === 0) return "";
  return num.toLocaleString("en-US");
}

function stripCommas(str: string): number {
  const cleaned = str.replace(/,/g, "");
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ value, onChange, prefix = "USD", className, ...props }, ref) => {
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      const raw = e.target.value.replace(/[^0-9.,]/g, "");
      onChange(stripCommas(raw));
    }

    return (
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">
            {prefix}
          </span>
        )}
        <Input
          ref={ref}
          type="text"
          inputMode="numeric"
          className={cn(prefix && "pl-12", className)}
          value={formatWithCommas(value)}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
);

CurrencyInput.displayName = "CurrencyInput";

export { CurrencyInput };
