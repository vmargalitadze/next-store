import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const barlowFont = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight:['500', '700']
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${barlowFont.className} antialiased`}
    >
      <ThemeProvider 
      attribute='class'
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      >


      {children}
 
      </ThemeProvider>
    </body>
  </html>
  );
}
