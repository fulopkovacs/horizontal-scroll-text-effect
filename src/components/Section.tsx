import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-6 min-h-screen text-gray12 sm:mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl",
        className
      )}
    >
      {children}
    </div>
  );
}
