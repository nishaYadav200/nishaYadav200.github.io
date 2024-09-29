// app/layout.tsx (RootLayout)
import type { Metadata } from "next";
import "./globals.css";
import { Gabarito } from "next/font/google";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/toaster";
import DockMenu from "@/components/DockMenu";

const gabarito = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arpit Yadav | Full-Stack Developer",
  description:
    "Full-stack developer skilled in JavaScript, React, TypeScript, and MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${gabarito.className} h-full w-full antialiased`}>
        <ScrollArea className="relative flex h-full w-full">
          <div className="flex h-full w-full">
            <section className="h-full w-full bg-gray-300 dark:bg-[#0a0a0a]">
              {children}
            </section>
          </div>
          <ScrollBar className="text-black" />
          <DockMenu />
        </ScrollArea>
        <Toaster />
      </body>
    </html>
  );
}
