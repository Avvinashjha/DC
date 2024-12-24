import type { Metadata } from "next";
import "../styles/index.scss";
import { Roboto } from "next/font/google";
import Header from "../components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import React from "react";

const geistMono = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DC",
  description: "Your daily dose of code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className}`}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
