import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo - Iyzidann"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <head>
        <title>Todo App - Aplikasi Todo List Modern</title>
        <meta name="description" content="Aplikasi todo list modern dengan fitur dark mode, multi bahasa, dan kalkulator." />
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
