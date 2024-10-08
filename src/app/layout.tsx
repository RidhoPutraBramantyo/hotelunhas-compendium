import type { Metadata } from "next";
import { Inter, Oranienbaum, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Unhas Makassar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://hotelunhas.id/wp-content/uploads/2022/10/cropped-icon-png.png"
          type="image/x-icon"
        />
      </head>
      <body className={`font-poppins w-screen flex flex-col justify-center`}>
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
