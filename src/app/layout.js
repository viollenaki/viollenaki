import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "viollenaki - Portfolio",
  description: "Portfolio of viollenaki - Developer, Creator, and Tech Enthusiast",
  icons: {
    icon: [
      { url: "https://github.com/viollenaki/viollenaki/blob/main/src/app/icon.png", type: "image/png" },
    ],
    shortcut: "https://github.com/viollenaki/viollenaki/blob/main/src/app/icon.png",
    apple: "https://github.com/viollenaki/viollenaki/blob/main/src/app/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
