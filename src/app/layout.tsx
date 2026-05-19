import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'GÖKNOVA | Dijital Medya & Yazılım',
  description: 'Sinematik drone çekimi, yazılım çözümleri ve dijital branding uzmanı.',
  openGraph: {
    "title": "GÖKNOVA",
    "description": "Gökyüzünden Yazılıma Dijital Güç",
    "type": "website",
    "siteName": "GÖKNOVA"
  },
};


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
