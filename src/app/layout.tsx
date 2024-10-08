import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import { cn } from "@/lib/utils";
import HeaderSection from "@/components/common/HeaderSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] }); 

export const metadata: Metadata = {
  title: "SAMRIDH SATNALIKA | PORTFOLIO",
  description: "Samridh Satnalika's portfolio showcasing my skills and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-background', poppins.className)}> 
        <HeaderSection />
        {children}
      </body>
    </html>
  );
}
