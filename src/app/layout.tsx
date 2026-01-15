import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voyager VR - Network Infrastructure Proposal",
  description: "Network infrastructure proposal for Voyager Virtual Reality Ventures",
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
