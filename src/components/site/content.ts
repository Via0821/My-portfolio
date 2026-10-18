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
