import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Fujifilm Partners for Life Cell Therapy Landing Page",
  description:
    "Learn how Fujifilm Partners for Life companies advance cell therapies and transform human health with our partners worldwide, from discovery to commercialization.",
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
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/cell-therapy/favicon.png" type="image/png" />
      </head>
      <body className="font-roboto">{children}</body>
      <GoogleAnalytics gaId="G-7B59VYKCVX" />
    </html>
  );
}
