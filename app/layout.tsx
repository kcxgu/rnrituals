import type { Metadata } from "next";
import { Noto_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const mainFont = Noto_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R'N Rituals - A mini spa break at home or the office",
  description: "A mini spa break at home or the office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
