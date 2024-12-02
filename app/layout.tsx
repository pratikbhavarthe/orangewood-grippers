import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Define the PPMonumentExtended-Regular font
const monumentRegular = localFont({
  src: "/fonts/Neue Regrade Semibold.otf",
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
  title: "Orangewood Labs - Soft Grippers",
  description: "Generated by create next app",
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
