import Link from 'next/link';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav style={{ padding: '10px', background: '#f2f2f2' }}>
        <Link href="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link href="/Lesson_1/blog" style={{ marginRight: '10px' }}>Blog</Link>
        <Link href="/Lesson_1/contact" style={{ marginRight: '10px' }}>Contact</Link>
        <Link href="/Lesson_1/products" style={{ marginRight: '10px' }}>Products</Link>
        <Link href="/Lesson_1/login">Login</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
