import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cell Therapy | Life Sciences | Fujifilm",
  description: "",
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
    </html>
  );
}
