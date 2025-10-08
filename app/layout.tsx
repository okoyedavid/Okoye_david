import Footer from "@/components/Footer";
import StaggeredMenu from "@/components/StaggeredMenu";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Providers from "./contexts/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Okoye",
  description: "Front End developer portfolio",
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
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${space.variable} dark:bg-black dark:text-white antialiased `}
      >
        <Providers>
          <StaggeredMenu position="right" colors={["#fb2c36", "#5227FF"]} />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
