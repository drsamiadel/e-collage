import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Navbar/Navbar";
import Footer from "./Footer/Footer";

const albert_Sans = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-Collage",
  description: "LMS App with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${albert_Sans.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="px-2 flex-grow">
          <div className="max-w-7xl min-w-[300px] mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
