
import '@/styles/globals.css';
import Head from 'next/head';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>Profounder</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
