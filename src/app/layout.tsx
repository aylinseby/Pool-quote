import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Visualization Brief — Stayezy Office & Reception | Munnar",
  description:
    "Request for Quotation: Photorealistic 3D interior renders for a luxury pool-level office space in Munnar, Kerala. Dark marble, brushed gold accents, curved glass facades.",
  openGraph: {
    title: "3D Visualization Brief — Stayezy Office & Reception",
    description:
      "RFQ for photorealistic 3D renders of a luxury ground-floor office beneath a figure-8 infinity pool in Munnar, Kerala.",
    type: "website",
    locale: "en_IN",
    siteName: "Stayezy",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Visualization Brief — Stayezy",
    description:
      "RFQ for photorealistic 3D renders of a luxury office space in Munnar, Kerala.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased bg-stone-950 text-cream">
        {children}
      </body>
    </html>
  );
}
