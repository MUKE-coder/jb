import { cn } from "@/lib/utils";

/**
 * Diagonal-stripe separator used between profile/page sections.
 * Extracted here so it can be imported by any page without violating
 * Next.js's Page export contract (which forbids non-standard exports
 * from `page.tsx` files).
 */
export function ProfileSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
