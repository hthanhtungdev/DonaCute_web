import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiệp Cưới - Huỳnh Thanh Tùng & Nguyễn Thị Đoan 💕",
  description: "Trân trọng kính mời bạn đến dự tiệc cưới tại nhà Đoan",
  openGraph: {
    title: "Thiệp Cưới - Huỳnh Thanh Tùng & Nguyễn Thị Đoan 💕",
    description: "Trân trọng kính mời bạn đến dự tiệc cưới tại nhà Đoan",
    images: [
      {
        url: "/z7445093432467_ecf82043905e97bbac88542b143526f0.jpg",
        width: 1200,
        height: 630,
        alt: "Thanh Tùng & Đoan Wedding",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
