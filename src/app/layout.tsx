import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Portfolio",
  description:
    "A simple crypto portfolio app built with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-600 bg-gradient-to-b from-slate-100 to-white min-h-screen">
        <nav className="w-full bg-white py-4 px-12 border-b flex justify-between items-center">
          <Link className="font-bold text-lg" href="/">Crypto Portfolio</Link>
          <button className="border rounded-lg py-2 px-5 hover:bg-gray-100">
            Connect Wallet
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}
