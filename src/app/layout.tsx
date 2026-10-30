import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "../config/fonts";

import { TopMenu } from "../components";



export const metadata: Metadata = {
  title: "Eternium Store",
  description:
    "Descubre Eternium, una tienda de ropa donde el estilo, la calidad y la autenticidad se unen para crear una forma única de vestir.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopMenu/>
        {children}
        </body>
    </html>
  );
}
