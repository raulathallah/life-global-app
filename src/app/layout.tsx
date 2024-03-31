import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life Global",
  description: "Life Global Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " h-fit"}>
        <div className="overlay"></div>
        <video
          src={"/bgvideo.mp4"}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="pt-10 px-36 w-full content text-white">
          <Navbar />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
