import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroll";
import MobileMenu from "@/components/MobileMenu";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroller/>
          <MobileMenu/>
        {children}
      </body>
    </html>
  );
}
