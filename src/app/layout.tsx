import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Roots Fresh Carrot - Wortel Segar Berkualitas",
  description: "Penyedia wortel segar berkualitas dari Muntilan, Magelang, Jawa Tengah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.className} scroll-smooth h-full antialiased`}>
      <body className="bg-white min-h-screen text-gray-800 antialiased flex flex-col justify-between m-0 p-0">
        <main className="w-full min-h-screen flex flex-col">
          {children}
        </main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}