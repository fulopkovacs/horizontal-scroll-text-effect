import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return (
    <div className="mx-6 bg-gray3 text-gray12 sm:mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      {children}
    </div>
  );
}
