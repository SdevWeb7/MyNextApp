import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/globals.scss";
import {ReactNode} from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next App",
  description: "Made by Steven with Next.js, Prisma, server actions and TypeScript"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return <html lang="fr">

      <body className={inter.className}>


        <Header />

        <main className="main">
            {children}
        </main>

        <Footer />

      </body>

    </html>;
}
