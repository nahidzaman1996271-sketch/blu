import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "BLU Electrolyte Drink",
  description: "The Next Generation of Hydration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} tracking-tighter antialiased flex min-h-screen flex-col`}>
        {children}
      </body>
    </html>
  );
}
