import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./Components/SmoothScroll/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAVRRIQ",
  description: "MAVRRIQ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favIcon.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />

        <meta
          property="og:image"
          // content="https://loopify-zeta.vercel.app/openGraphImage.jpg"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </head>
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
