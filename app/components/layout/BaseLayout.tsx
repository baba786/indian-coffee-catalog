'use client';

import Header from './Header';
import Footer from './Footer';
import BackToTop from '../shared/BackToTop';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}