import './globals.css';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Next.js Multi Page App',
  description: 'A basic multi-page app using App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: 10 }}>
          <Link href="/">Home</Link> |{" "}
          <Link href="/blog">Blog</Link> |{" "}
          <Link href="/contact">Contact</Link> |{" "}
          <Link href="/products">Products</Link> |{" "}
          <Link href="/login">Login</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}