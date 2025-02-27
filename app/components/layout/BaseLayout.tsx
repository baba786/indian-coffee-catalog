'use client';

import Header from './Header';
import Footer from './Footer';
import BackToTop from '../shared/BackToTop';
import { ThemeProvider } from '../../context/ThemeProvider';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="indian-coffee-theme">
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}