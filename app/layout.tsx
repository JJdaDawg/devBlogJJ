import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";
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
  title: "Joshua Jones",
  description: "Software engineering student at Conestoga College. Writing about systems, C#, and things I'm building.",
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
        {/* Floating decorative blobs — soft pastel anime vibe */}
        <div
          className="blob float-slow"
          style={{
            top: "10%",
            left: "-5%",
            width: "320px",
            height: "320px",
            background: "var(--pastel-pink)",
          }}
        />
        <div
          className="blob float-slow"
          style={{
            top: "40%",
            right: "-8%",
            width: "380px",
            height: "380px",
            background: "var(--pastel-lavender)",
            animationDelay: "-2s",
          }}
        />
        <div
          className="blob float-slow"
          style={{
            bottom: "5%",
            left: "30%",
            width: "280px",
            height: "280px",
            background: "var(--pastel-sky)",
            animationDelay: "-4s",
          }}
        />

        <Nav />
        <div className="flex-1 w-full">{children}</div>
      </body>
    </html>
  );
}
