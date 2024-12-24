import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./Components/SmoothScroll/SmoothScrolling";
import { headers } from "next/headers";
import UnderMaintainance from "./Components/undermaintainance/UnderMaintainance";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAVRRIQ",
  description: "MAVRRIQ",
};

export default function RootLayout({ children }) {

  const header = headers();
  const host = header.get("x-host");

  console.log(host, "hosttt");
  // if (host === "www.mavrriq.com") {
  if (host === "") {
    return (
      <html lang="en">
        <body className={inter.className}>
          <UnderMaintainance />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />

        <meta
          property="og:image"
          content="https://www.mavrriq.com/opengraphimage.png"
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
