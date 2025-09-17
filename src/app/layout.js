import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarVisibility from "./components/NavbarVisibility";
import Footer from "./components/Footer";
import NextAuthProvider from "./providers/SessionProvider";
import QueryProvider from "./providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "RoomEase - Find Your Perfect Stay",
  description: "RoomEase helps you find, book, and manage properties with ease. Discover your next stay today!",
  openGraph: {
    title: "RoomEase - Find Your Perfect Stay",
    description: "RoomEase helps you find, book, and manage properties with ease. Discover your next stay today!",
    type: "website",
    images: ["/logo-small.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoomEase - Find Your Perfect Stay",
    description: "RoomEase helps you find, book, and manage properties with ease. Discover your next stay today!",
    images: ["/logo-small.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <NextAuthProvider>
          <QueryProvider>
            <NavbarVisibility />
            <main>{children}</main>
            <Footer />
          </QueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
// ...existing code...
}
