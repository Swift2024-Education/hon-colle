import type { Metadata } from "next";
import "./globals.css";
import { notojp } from "@/app/fonts";
import Header from "./ui/header";
import Footer from "@/app/ui/footer";
import { SessionProvider } from "next-auth/react";
import React from "react";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={notojp.className}>

        <Header />
        <SessionProvider>{children}</SessionProvider>

        {/*children*/}
        <Footer />
      </body>
    </html>
  );
}
