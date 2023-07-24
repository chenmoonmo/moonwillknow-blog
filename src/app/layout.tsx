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
import { Header } from "./header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moon Will Know",
  description: "Moon will know",
  applicationName: "MoonWillKnow",
  appleWebApp: {
    capable: true,
    title: "MoonWillKnow",
    statusBarStyle: "default",
    startupImage: "/launch.png",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: "/icons/icon-144x144.png",
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "rgb(30,41,59)",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#fff",
    },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {props.children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
