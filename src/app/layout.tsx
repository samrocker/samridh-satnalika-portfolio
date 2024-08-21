import type { Metadata } from "next";
import { Poppins } from "next/font/google";  // Import Poppins font
import "./globals.css";
import { cn } from "@/lib/utils";
import HeaderSection from "@/components/common/HeaderSection";
import { ThemeProvider } from "@/components/common/theme-provider"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] }); // Customize the font weights as needed

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
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <HeaderSection />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
