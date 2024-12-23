import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Define the PPMonumentExtended-Regular font
const monumentRegular = localFont({
  src: "/fonts/POICarbonicTrial-Medium.otf",
  variable: "--font-monument-regular",
  weight: "400", // Regular weight
});

// Define the PPMonumentExtended-Black font
const monumentBlack = localFont({
  src: "/fonts/AcroMono.otf",
  variable: "--font-monument-black",
  weight: "900", // Black weight
});

export const metadata: Metadata = {
  title: "Aadhunik Grippers - Advanced Soft Grippers for Robotics and Food Processing",
  description: "Aadhunik Grippers specializes in high-quality, food-grade silicone soft grippers for safe, flexible, and precise handling of delicate items in food processing and robotics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monumentRegular.variable} ${monumentBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
