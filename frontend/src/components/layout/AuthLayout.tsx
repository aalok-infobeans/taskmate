import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-10 w-full max-w-md">
        <div className="logo text-center mb-6">
          <img
            src="/src/assets/icons/logo.svg"
            alt="TaskMate - A Real-Time Team Task Manager"
            className="mx-auto mb-6"
          />
        </div>

        {children}
      </div>
    </div>
  );
}
