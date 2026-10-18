export const navItems = [
  { id: "top", label: "ホーム" },
  { id: "about", label: "私について" },
  { id: "projects", label: "実績" },
  { id: "skills", label: "スキル" },
  { id: "career", label: "経歴" },
  { id: "contact", label: "お問い合わせ" },
] as const;

export const services = [
  {
    index: "01",
    title: "インターフェース",
    lead: "画面の精度",
    body: "React / Next.js を軸に、情報の階層、余白、タイポグラフィ、動きまで含めて設計します。見た目の再現ではなく、読みやすさと操作の意図が残る実装にします。",
  },
  {
    index: "02",
    title: "業務システム",
    lead: "現場で使えること",
    body: "数字、入力、一覧、比較。現場の手順がそのまま画面になるように、ダッシュボードや社内ツールを組み立てます。",
  },
  {
    index: "03",
    title: "接続",
    lead: "必要なところだけ",
    body: "API、スプレッドシート、WordPress、決済。画面の外側にあるデータや仕組みを、必要な範囲でつなぎます。",
  },
  {
    index: "04",
    title: "運用",
    lead: "公開のあと",
    body: "VPSへの公開、その後の改修、保守のしやすさまで見ます。動いた時点で完成にはしません。",
  },
] as const;

export const values = [
  {
    index: "01",
    title: "先の保守を選ぶ",
    body: "楽しい道よりも、将来楽しくなる道を選ぶ。目先の表示より、あとから直せる構造を優先します。",
  },
  {
    index: "02",
    title: "動いただけにしない",
    body: "表示される、動作する、で止めません。機能追加と運用のしやすさを実装の条件にします。",
  },
  {
    index: "03",
    title: "端から端まで通す",
    body: "要件、画面、接続、公開。一人で持つときも、分業のときも、境界を曖昧にせず通します。",
  },
] as const;

export const timeline = [
  {
    label: "基盤",
    title: "実装から運用まで",
    body: "IT業界で10年以上。システム開発、Webアプリケーション、業務効率化を、要件定義から運用改善まで担当してきました。",
  },
  {
    label: "画面",
    title: "フロントの仕事",
    body: "コーポレートサイト、LP、採用サイト。Figmaやデザインカンプを起点に、WordPress実装とアニメーションまで仕上げます。",
  },
  {
    label: "仕組み",
    title: "画面の外側",
    body: "API連携、業務自動化、経営ダッシュボード。データが更新され、判断に使えるところまでを仕事の範囲にしています。",
  },
  {
    label: "直近",
    title: "一人で通した開発",
    body: "MEO支援システムと、音声対話型AIアシスタント。画面、連携、運用を1名体制で担当しました。",
  },
] as const;

export const skillGroups = [
  {
    label: "Frontend",
    names: [
      "figma",
      "HTML 5",
      "CSS 3",
      "JavaScript",
      "TypeScript",
      "React JS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    names: ["PHP", "Python", "Node JS", "mysql", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Infrastructure",
    names: ["git", "GitHub", "Supabase", "Firebase", "AWS"],
  },
  {
    label: "AI",
    names: ["ChatGPT", "Gemini", "Claude"],
  },
] as const;

export const heroProjectIds = ["kinkaitori", "noruman", "clinicAI"] as const;
