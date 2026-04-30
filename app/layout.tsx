import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DotGridBackground from "./components/DotGridBackground";
import CursorGlow from "./components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Isaac Nuñez",
    template: "%s | Isaac Nuñez",
  },
  description:
    "Software engineer and CS student building GameCache, full-stack apps, and automation tools.",
  metadataBase: new URL("https://isaacnunez.com"),
  openGraph: {
    title: "Isaac Nuñez",
    description:
      "Software engineer and CS student building GameCache, full-stack apps, and automation tools.",
    url: "https://isaacnunez.com",
    siteName: "Isaac Nuñez",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Isaac Nuñez",
    description:
      "Software engineer and CS student building GameCache, full-stack apps, and automation tools.",
    creator: "@izesik",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DotGridBackground />

        {children}
      </body>
    </html>
  );
}
