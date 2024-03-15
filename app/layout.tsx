import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding",
  description: "Wedding Chuong and Hien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
