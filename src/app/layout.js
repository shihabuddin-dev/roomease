import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarVisibility from "./components/NavbarVisibility";
import Footer from "./components/Footer";
import NextAuthProvider from "./providers/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roomease Application",
  description: "Roomease Application for properties booking system application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextAuthProvider>
          <NavbarVisibility />
          <main>{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
// ...existing code...
}
