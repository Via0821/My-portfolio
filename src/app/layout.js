import "./globals.css";

export const metadata = {
  title: "金本 卓弥 | Portfolio",
  description:
    "システム・Webアプリ開発からAI導入・業務自動化まで一貫対応する金本卓弥のポートフォリオ",
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
