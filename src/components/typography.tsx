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

export function SubHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-2xl font-medium tracking-tight", className)}>
      {children}
    </p>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("text-2xl font-semibold tracking-tight", className)}>
      {children}
    </span>
  );
}

export function RepoTitle({ children }: { children: string }) {
  return (
    <a
      href={`https://github.com/${children}`}
      target="_blank"
      className="flex items-center gap-3 text-sm font-medium text-gray11"
    >
      {children}
      <img
        src="/external-link.svg"
        alt=""
        className="block aspect-square h-3"
      />
    </a>
  );
}
