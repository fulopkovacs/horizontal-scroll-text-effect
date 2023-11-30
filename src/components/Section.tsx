import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return (
    <div className="mx-6 max-w-3xl bg-gray3 text-white sm:mx-auto sm:max-w-xl">
      {children}
    </div>
  );
}
