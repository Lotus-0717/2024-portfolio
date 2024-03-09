import type { Metadata } from "next";
import "./globals.css";
import Scene from "@components/ThreeJSComponents/Scene";
import { Poppins, Noto_Sans_TC } from "next/font/google";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const nstc = Noto_Sans_TC({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steven Yeh's Portfolio",
  description: "Steven Yeh's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Scene></Scene>
        <div className=" absolute bottom-5 w-full text-center text-white">
          <p>Designed and coded by Steven Yeh © 2024</p>
        </div>
        <div className={`${poppins.className} ${nstc.className}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
