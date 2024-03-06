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
  title: "Lotus's Portfolio",
  description: "test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Scene></Scene>
        </div>
        <div className={`${poppins.className} ${nstc.className}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
