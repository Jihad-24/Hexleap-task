import DarkProvider from "@/components/context/DarkModeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexleap",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DarkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>{children}</body>
      </html>
    </DarkProvider>
  );
}
