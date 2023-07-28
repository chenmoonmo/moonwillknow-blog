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
import { Header, ThemeColor } from "./header";
import { Footer } from "@/components/footer";
import { Feed } from "@/components/feed";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moon Will Know",
  description: "Moon will know",
  applicationName: "MoonWillKnow",
  twitter: {
    title: "Moon Will Know",
    description: "Moon will know",
    card: "summary",
    site: "@chenjustcam",
    creator: "@chenjustcam",
    images: "/cat.JPG",
  },
  openGraph: {
    title: "Moon Will Know",
    description: "Moon will know",
    url: "https://moonwillknow.com",
    type: "website",
    images: "/cat.JPG",
  },
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
          <ThemeColor />
          <Header />
          {children}
          <Feed />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
