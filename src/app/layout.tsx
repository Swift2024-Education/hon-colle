import type { Metadata } from "next";
import "./globals.css";
import { notojp } from "@/app/fonts";
import Header from "./ui/header";
import Footer from "@/app/ui/footer";
import { SessionProvider } from "next-auth/react";
import React from "react";

const schoolName = process.env.NEXT_PUBLIC_SCHOOL_NAME || '';

export const metadata: Metadata = {
  title: {
    template: `%s | ほんコレ ${schoolName}`,
    default: `ほんコレ ${schoolName}`,
  },
  description: "学校図書館の本の検索と読書の記録ができる 小学生のためのWebアプリ。",
  metadataBase: new URL('https://hon-colle.pages.dev/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
