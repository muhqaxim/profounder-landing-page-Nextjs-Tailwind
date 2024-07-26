import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profounder",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>Profounder</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
