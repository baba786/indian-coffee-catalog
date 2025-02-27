'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);
  
  // This ensures hydration completes before we try to access localStorage
  useEffect(() => {
    setMounted(true);
    
    // Check for dark mode preference
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Indian Coffee Guide - Discover Great Indian Coffee</title>
        <meta name="description" content="Explore and discover the finest Indian coffee and roasters. Your guide to finding the perfect cup of Indian coffee." />
        <meta name="keywords" content="Indian coffee, coffee roasters, specialty coffee, coffee guide, coffee marketplace" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}