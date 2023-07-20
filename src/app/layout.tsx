import "./globals.css";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "./_header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moon Will Know",
  description: "Moon will know",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Header></Header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
