import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Граждани на квартала",
  description: "граждани на квартала",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
      {/* <footer className="fixed right-0 bottom-0 z-50 mr-2 mb-1 text-right">
        <p className="rounded bg-white/80 px-2 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Interactive Business Partners
          Petersburg
        </p>
      </footer> */}
    </html>
  );
}
