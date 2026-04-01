"use client";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export interface StarRatingProps {
  /** Rating value (supports half stars via 0.5 increments). */
  rating: number;
  /** Maximum number of stars. @default 5 */
  maxRating?: number;
  /** Size variant. @default "default" */
  size?: "sm" | "default" | "lg";
  /** Show numeric rating and review count. @default false */
  showCount?: boolean;
  /** Number of reviews to display. */
  reviewCount?: number;
  className?: string;
}

const sizeClasses = {
  sm: "h-3 w-3",
  default: "h-4 w-4",
  lg: "h-5 w-5",
};

export function StarRating({
  rating,
  maxRating = 5,
  size = "default",
  showCount = false,
  reviewCount,
  className,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(sizeClasses[size], "fill-amber-400 text-amber-400")}
          />
        ))}

        {hasHalfStar && (
          <div className="relative">
            <Star
              className={cn(sizeClasses[size], "text-muted-foreground/30")}
            />
            <div className="absolute inset-0 w-1/2 overflow-hidden">
              <Star
                className={cn(
                  sizeClasses[size],
                  "fill-amber-400 text-amber-400"
                )}
              />
            </div>
          </div>
        )}

        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(sizeClasses[size], "text-muted-foreground/30")}
          />
        ))}
      </div>

      {showCount && reviewCount !== undefined && (
        <span className="ml-1 text-xs text-muted-foreground">
          {rating.toFixed(1)} ({reviewCount})
        </span>
      )}
    </div>
  );
}
