import "./globals.css";

export const metadata = {
  title: "金本 卓弥 | Portfolio",
  description:
    "React / Next.js を軸に、UI設計・業務システム・API・運用まで対応する金本卓弥のポートフォリオ",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
