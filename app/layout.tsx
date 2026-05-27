import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bell Frost Coolroom | Commercial Refrigeration Specialists",
  description:
    "Bell Frost Coolroom provides coolroom installations, servicing and emergency commercial refrigeration repairs you can rely on 24/7.",
  applicationName: "Bell Frost Coolroom",
  authors: [{ name: "Bell Frost Coolroom" }],
  metadataBase: new URL("https://bell-frost-coolroom.vercel.app"),
  openGraph: {
    title: "Bell Frost Coolroom",
    description:
      "Premium commercial refrigeration, coolroom repairs and emergency breakdown support.",
    type: "website",
    locale: "en_AU",
    siteName: "Bell Frost Coolroom",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06234a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
