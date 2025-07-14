import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> |{" "}
          <Link href="/blog">Blog</Link> |{" "}
          <Link href="/contact">Contact</Link> |{" "}
          <Link href="/products">Products</Link> |{" "}
          <Link href="/login">Login</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
