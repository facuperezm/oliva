import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Inter({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("min-h-screen scroll-smooth antialiased", roboto.className)}
    >
      <body className={cn(roboto.className, "container")}>{children}</body>
    </html>
  );
}
