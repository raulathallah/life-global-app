import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life Global",
  description: "Life Global Website",
  icons: {
    icon: ["/favicon.ico?v=1"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>
        <VideoBackground />
        <div className="w-full content text-white">
          <Navbar />
          <Providers>{children}</Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
