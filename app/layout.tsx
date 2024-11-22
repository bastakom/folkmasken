import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "SES PROTECTION",
  description: "SES PROTECTION – DIN SVENSKA LEVERANTÖR AV BRANDBEKÄMPNINGSUTRUSTNING FRÅN ROSENBAUER",
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
