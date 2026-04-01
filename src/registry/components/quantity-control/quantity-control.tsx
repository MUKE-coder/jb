"use client";

import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

export interface QuantityControlProps {
  /** Current quantity value. */
  value: number;
  /** Minimum value. @default 1 */
  min?: number;
  /** Maximum value. @default 99 */
  max?: number;
  /** Called when the value changes. */
  onChange: (value: number) => void;
  /** Size variant. @default "default" */
  size?: "sm" | "default" | "lg";
  /** Disable the control. */
  disabled?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: {
    button: "h-6 w-6",
    icon: "h-3 w-3",
    display: "h-6 w-8 text-xs",
  },
  default: {
    button: "h-8 w-8",
    icon: "h-4 w-4",
    display: "h-8 w-10 text-sm",
  },
  lg: {
    button: "h-10 w-10",
    icon: "h-5 w-5",
    display: "h-10 w-12 text-base",
  },
};

export function QuantityControl({
  value,
  min = 1,
  max = 99,
  onChange,
  size = "default",
  disabled = false,
  className,
}: QuantityControlProps) {
  const sizes = sizeClasses[size];

  return (
    <div
      className={cn(
        "inline-flex items-center overflow-hidden rounded-lg border border-border bg-background",
        className
      )}
    >
      <button
        type="button"
        onClick={() => value > min && onChange(value - 1)}
        disabled={disabled || value <= min}
        className={cn(
          sizes.button,
          "flex items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        <Minus className={sizes.icon} />
      </button>
      <span
        className={cn(
          sizes.display,
          "flex items-center justify-center border-x border-border font-medium tracking-tight"
        )}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => value < max && onChange(value + 1)}
        disabled={disabled || value >= max}
        className={cn(
          sizes.button,
          "flex items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        <Plus className={sizes.icon} />
      </button>
    </div>
  );
}
