import type { Metadata } from "next";
import "./globals.css";
import { Dancing_Script, Playfair_Display, Lato } from "next/font/google";
import { ReactNode } from "react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dancing-script",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair-display",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Typing Speed Tester",
  description: "Check your WPM & accuracy in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${playfairDisplay.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
