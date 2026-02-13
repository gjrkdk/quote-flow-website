import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuoteFlow - Custom Pricing for Shopify",
  description: "Set custom pricing for your Shopify products with QuoteFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
