import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "@/utils/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music Sansar",
  description: "Sansar for music lovers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
