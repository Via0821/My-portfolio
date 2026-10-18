export const resume = {
  href: "/resume.pdf",
  filename: "金本卓弥_職務経歴書.pdf",
} as const;

export const navItems = [
  { id: "top", label: "ホーム" },
  { id: "about", label: "私について" },
  { id: "projects", label: "実績" },
  { id: "skills", label: "スキル" },
  { id: "career", label: "経歴" },
  { id: "contact", label: "お問い合わせ" },
] as const;

export const values = [
  {
    index: "一",
    title: "先の保守を選ぶ",
    body: "楽しい道よりも、将来楽しくなる道を選ぶ。目先の表示より、あとから直せる構造を優先します。",
  },
  {
    index: "二",
    title: "動いただけにしない",
    body: "表示される、動作する、で止めません。機能追加と運用のしやすさを実装の条件にします。",
  },
  {
    index: "三",
    title: "端から端まで通す",
    body: "要件、画面、接続、公開。一人で持つときも、分業のときも、境界を曖昧にせず通します。",
  },
] as const;

export const career = [
  {
    period: "2026.04 — 現在",
    org: "個人事業主・フリーランス",
    role: "Web / AI システム受託開発",
    body: "多店舗向けMEO支援システム、音声対話型AIアシスタント、海外向けVPSホスティングサービスを、いずれも1名体制で要件整理から本番運用まで担当。",
    metrics: ["音声応答 10.5秒 → 4.2秒", "MEOシステムを約1か月で本番稼働"],
  },
  {
    period: "2024.06 — 2026.03",
    org: "株式会社iput（業務委託）",
    role: "フロントエンドエンジニア",
    body: "6名体制の業務管理システムで、全21画面中15画面・約58機能を主担当。24種類の共通UIコンポーネントと型定義を整備し、基本設計からコードレビュー・運用保守まで対応。",
    metrics: ["画面表示 2.4秒 → 0.9秒（Redis）", "リリース 45分 → 12分（GitHub Actions）"],
  },
  {
    period: "2022.04 — 2024.05",
    org: "個人事業主・フリーランス",
    role: "フロントエンドエンジニア",
    body: "業務支援システム3件、企業サイト・LP等11件の計14案件に参画。React / Next.js による業務画面の設計・実装を中心に、最大6名体制のチーム開発を経験。",
    metrics: ["計14案件"],
  },
  {
    period: "2018.07 — 2022.03",
    org: "株式会社カズミア（正社員）",
    role: "フロントエンドエンジニア",
    body: "企業サイト・LP制作と自社Webサービスのフロントエンド開発に従事。WordPressのオリジナルテーマ開発から、React / Next.js / TypeScript によるアプリケーション開発まで担当。",
    metrics: [],
  },
] as const;

export const certifications = [
  { name: "応用情報技術者試験", date: "2022.12" },
  { name: "基本情報技術者試験", date: "2021.02" },
] as const;

// `core` marks the stack the hero copy leads with.
export const skillGroups = [
  {
    label: "Frontend",
    ja: "フロントエンド",
    core: ["TypeScript", "React", "Next.js"],
    rest: ["JavaScript", "HTML", "CSS", "Tailwind CSS", "Figma"],
  },
  {
    label: "AI",
    ja: "AI・音声処理",
    core: ["LLM API", "Claude API"],
    rest: ["音声認識・音声合成", "ストリーミング処理", "Dify"],
  },
  {
    label: "Data",
    ja: "データベース",
    core: ["PostgreSQL", "Supabase"],
    rest: ["MySQL", "Redis", "Firebase"],
  },
  {
    label: "Integration",
    ja: "外部API連携",
    core: ["REST API", "OAuth 2.0"],
    rest: ["Stripe", "LINE Messaging API", "Google Business Profile API", "Google Sheets API"],
  },
  {
    label: "Infra",
    ja: "インフラ・開発運用",
    core: ["Linux / VPS", "GitHub Actions"],
    rest: ["AWS", "systemd", "Cloudflare Tunnel", "GitHub"],
  },
  {
    label: "CMS",
    ja: "CMS・バックエンド",
    core: ["WordPress"],
    rest: ["PHP", "Python", "Node.js"],
  },
] as const;
