import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

export function Title({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-5xl font-medium tracking-tight text-gray12",
        className
      )}
    >
      {children}
    </p>
  );
}
