import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DevTools from "@/components/DevTools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wesley Li - Product Designer",
  description: "Product designer specializing in accessibility and user-centered design",
  keywords: ["Product Design", "UX Design", "Accessibility", "Portfolio"],
  authors: [{ name: "Wesley Li (Huikang Li)" }],
  openGraph: {
    title: "Wesley Li - Product Designer",
    description: "Product designer specializing in accessibility and user-centered design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <DevTools />
      </body>
    </html>
  );
}
