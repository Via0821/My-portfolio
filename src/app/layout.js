import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Shippori_Mincho({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const description =
  "React / Next.js を軸に、UI設計・業務システム・AI連携・運用まで対応する Webエンジニア 金本卓弥のポートフォリオ";

export const metadata = {
  title: "金本 卓弥 | Portfolio",
  description,
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "金本 卓弥 | Portfolio",
    description,
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#f4efe6",
};

// Hide reveal targets before first paint so they don't flash and then disappear.
const revealScript =
  "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('reveal-ready')";

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
