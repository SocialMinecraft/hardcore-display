import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoMC Hardcore Stats",
  description: "Social Minecraft Hardcore stats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="mt-10">
            <div className="flex flex-row justify-center">
            <h1 className="font-bold text-4xl text-center p-3">SoMC: 3 Life Hardcore Ranking</h1>
            </div>
        </header>
        {children}
      </body>
    </html>
  );
}
