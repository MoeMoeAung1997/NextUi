import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as React from "react";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./provider";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { NextUIProvider } from "@nextui-org/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
