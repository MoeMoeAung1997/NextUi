// app/providers.tsx
"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import NavbarPage from "./nav/Navbar";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <NavbarPage>{children}</NavbarPage>
        </main>
      </NextUIProvider>
    </React.StrictMode>
  );
}
