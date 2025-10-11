import { Ubuntu, Montserrat } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header/header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

const ubuntu = Ubuntu({
  subsets: ["latin", "cyrillic"],
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Shop App Next.js",
  description: "A simple shop application built with Next.js",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${montserrat.variable} ${ubuntu.variable}`}>
      <Header />
      <body>{children}</body>
    </html>
  );
}
