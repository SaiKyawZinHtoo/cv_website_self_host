import type { Metadata } from "next";
import { Space_Grotesk, Inter, Noto_Sans_Myanmar } from "next/font/google";
import { AppProvider } from "@/context/AppProvider";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  variable: "--font-noto-myanmar",
  subsets: ["myanmar"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sai Kyaw Zin Htoo — Senior Flutter Developer",
  description:
    "CV & Portfolio of Sai Kyaw Zin Htoo — Senior Flutter Developer specializing in cross-platform mobile, full-stack web, and enterprise applications.",
  keywords: [
    "Flutter Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "Next.js",
    "TypeScript",
    "Myanmar Developer",
  ],
  authors: [{ name: "Sai Kyaw Zin Htoo" }],
  openGraph: {
    title: "Sai Kyaw Zin Htoo — Senior Flutter Developer",
    description:
      "Experienced IT Professional specializing in Flutter, React, Next.js, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${notoSansMyanmar.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
