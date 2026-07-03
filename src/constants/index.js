import {
  aws,
  backend,
  carrent,
  chatgpt,
  claude,
  creator,
  css,
  education,
  figma,
  firebase,
  gemini,
  git,
  github,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  mysql,
  nodejs,
  parcare,
  php,
  postgresql,
  python,
  reactjs,
  resume,
  social,
  sorting,
  supabase,
  tailwind,
  tripguide,
  typescript,
  web,
  work,
  kinkaitoriVideos,
  foodWholesaleVideos,
  constructionAutoToolVideos,
  jrossoVideos,
  farmmanVideos,
  oueBeautyVideos,
  endoscopeVideos,
  homeCareVideos,
  offshoreVideos,
  coinaniVideos,
  goyokikidoctorVideos,
  trustVideos,
  norumanVideos,
  clinicAIVideos,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "自己紹介",
  },
  {
    id: "work",
    title: "実績",
  },
  {
    id: "contact",
    title: "お問い合わせ",
  },
];

const services = [
  {
    title: "フロントエンド エンジニア",
    icon: web,
  },
  {
    title: "バックエンド　エンジニア",
    icon: backend,
  },
  {
    title: "業務自動化ツール",
    icon: mobile,
  },
  {
    title: "AI エンジニア",
    icon: creator,
  },
];

const technologies = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "PHP",
    icon: php,
  },

  {
    name: "Python",
    icon: python,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "mysql",
    icon: mysql,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "PostgreSQL",
    icon: postgresql,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "GitHub",
    icon: github,
  },

  {
    name: "Supabase",
    icon: supabase,
  },

  {
    name: "Firebase",
    icon: firebase,
  },

  {
    name: "AWS",
    icon: aws,
  },

  {
    name: "ChatGPT",
    icon: chatgpt,
  },

  {
    name: "Gemini",
    icon: gemini,
  },

  {
    name: "Claude",
    icon: claude,
  },
];

const experiences = [
  {
    title: "Bachelor of Engineering",
    company_name: "University College of Engineering, Anna University, Chennai",
    icon: education,
    iconBg: "#E6DEDD",
    date: "August 2016 - May 2020",
    points: ["Computer Science and Engineering"],
  },
  {
    title: "Software Engineering Trainee",
    company_name: "Ameex Technologies",
    icon: work,
    iconBg: "#E6DEDD",
    date: "October 2020 - August 2021",
    points: [
      "Completed intensive training in UI/UX Design, Android development, and software quality assurance, acquiring skills crucial for modern software development",
      "Developed a strong foundation in UI/UX design principles, applying them effectively in creating designs for native mobile and web applications",
      "Conducted user interviews and usability tests to gather user feedback, which improved the UX design and led to valuable enhancements",
      "Created low and high-fidelity wireframes and prototypes, collaborating closely with product managers and a team of designers to refine product features",
      "Actively contributed to Agile sprints, ensuring timely feature delivery and continuous integration",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Ameex Technologies",
    icon: work,
    iconBg: "#E6DEDD",
    date: "September 2021 - March 2022",
    points: [
      "Engineered scalable, efficient solutions that enhanced user experience and performance",
      "Developed and maintained complex web applications using HTML,CSS,JavaScript,PHP, MySQL,AJAX",
      "Enhanced and streamlined the database architecture to improve data retrieval speed, achieving a 30% reduction in query response time while ensuring seamless user experience during peak traffic periods",
      "Implemented rigorous performance assessments across all web applications, utilizing automated testing tools that increased testing efficiency by 60%, enabling faster deployment cycles and improved software reliability",
      "Conducted in-depth performance analysis, optimizing system efficiency through detailed reports",
      "Completed relevant online courses, leading to the successful implementation of features that resolved four critical bugs in existing applications, improving overall user experience",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "すべて" },
  { id: "hp-lp-coding", label: "HP/LPコーディング" },
  { id: "workflow-automation", label: "業務自動化ツール" },
  { id: "web-systems", label: "Webシステム" },
  { id: "ai", label: "AI" },
];

const projects = [
  {
    id: "clinicAI",
    name: "AIによる医療業務の効率化支援",
    category: "ai",
    description:
      "AI健全経営ダッシュボード｜医療クリニック向け経営分析・異常検知システムを制作ました",
    detailedDescription:
      "・呼吸器内科クリニック4院の経営データを一元管理し、売上・来院数・新患数・レセプト単価・平均来院回数・コスト構造などを可視化する、医療機関向けのAI経営ダッシュボードを開発しました。\n・本システムでは、Googleスプレッドシートに蓄積された日次・月次・経費データをGAS API経由で取得し、Webダッシュボード上にグラフやKPIカードとして表示します。さらに、Dify APIと連携することで、単なる数値表示にとどまらず、各グラフや比較表の下にAIによる分析コメントを自動生成できる構成としました。\n・画面は「全体サマリー」「日次分析」「アラート設計」「コスト構造」の4つのタブで構成し、経営者やコンサルタントが現状把握から改善判断まで行いやすいように設計しています。特に、4院ごとのレセプト単価、平均来院回数、新患率、新患獲得コスト、固定費比率などを比較できるため、各院の強み・課題を直感的に把握できます。\n・また、曜日平均からの来院数乖離、客単価の急落、新患数の連続低下、平均来院回数の低下、予算進捗率の不足など、経営上の変化を早期に検知するアラートロジックも設計しました。これにより、問題が大きくなる前に対策を検討できる「先回り型」の経営管理を実現しています。\n・デザイン面では、医療・経営管理システムとして信頼感のある白背景と濃紺を基調に、Chart.jsを用いた視認性の高いグラフ表示を実装。PC・タブレット・スマートフォンでも閲覧しやすいレスポンシブ対応を前提に設計しました。\n・単なるダッシュボード制作ではなく、データ取得、API連携、AIインサイト生成、異常検知ロジック、UI設計までを含め、経営判断に活用できる実用的な業務システムとして構築した案件です。",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Google Apps Script",
        color: "green-text-gradient",
      },
      {
        name: "Dify API",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    video: clinicAIVideos[0],
    videos: clinicAIVideos,
  },

  {
    id: "kinkaitori",
    name: "金買取サイト制作（API連携）",
    category: "hp-lp-coding",
    description: "データ連携を活用した、情報更新型のWebサイトを開発しました。",
    detailedDescription:
      "・スプレッドシートAPIと連携し、金価格・地域別データをリアルタイム取得。\n・グラフ描画および計算ロジックを設計・実装し、データドリブンなUIを構築。\n・国内価格推移や店舗情報を統合しUX向上に貢献。\n・GitHubでのチーム開発およびWPカスタム投稿設計にも対応。",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    video: kinkaitoriVideos[0],
    videos: kinkaitoriVideos,
    live_link: "https://kinkaitori.com/",
  },

  {
    id: "foodWholesale",
    name: "食品卸業者向けサイト",
    category: "hp-lp-coding",
    description:
      "Figmaデザインをもとに、コーポレートサイトTOPページのレスポンシブコーディングおよびWordPress実装を担当。",
    detailedDescription:
      "Figmaデザインをもとに、コーポレートサイトTOPページ（約8000px）のレスポンシブコーディングを実装。WordPress環境でFROCSS／BEMを用いたCSS設計で構築。",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    video: foodWholesaleVideos[0],
    videos: foodWholesaleVideos,
  },

  {
    id: "construction-autoTool",
    name: "建設業向けの業務効率化ツール",
    category: "workflow-automation",
    description: "PDFから寸法拾い＋3D化　を半自動化ました",
    detailedDescription:
      "・構造図PDFから寸法・部材情報を抽出し、半自動で3D化 \n・基礎／地中梁／スラブのデータ抽出および照合処理 \n・特殊型枠面積の自動算出（手動調整も可能）",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    video: constructionAutoToolVideos[0],
    videos: constructionAutoToolVideos,
  },

  {
    id: "jrosso",
    name: "JROSSO",
    category: "hp-lp-coding",
    description: "衣料品販売サイト制作（コーディング＋WP実装）",
    detailedDescription:
      "Illustratorで作成されたトップページのデザインをもとに、WordPressサイトの構築（コーディング＋WP実装）しました。",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    video: jrossoVideos[0],
    videos: jrossoVideos,
    live_link: "https://j-rosso.com/",
  },

  {
    id: "noruman",
    name: "NORUMAN採用情報",
    category: "hp-lp-coding",
    description: "採用情報HPを制作ました。",
    detailedDescription:
      "すっきりとした保守性の高いコード構成と、GSAPを活用した魅力的なアニメーションを実装しました。",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    video: norumanVideos[0],
    videos: norumanVideos,
  },

  {
    id: "farmman",
    name: "ファームマン",
    category: "hp-lp-coding",
    description: "LPコーディング＆アニメーション実装＆サーバーアップました。",
    detailedDescription:
      "Figmaデザインを基に、1pxの妥協もない忠実なコーディングを行いました。\n テキストコーディング、SEO対策。",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    video: farmmanVideos[0],
    videos: farmmanVideos,
  },

  {
    id: "oueBeauty",
    name: "美容HP",
    category: "hp-lp-coding",
    description: "美容HPコーディング＆Wordpress実装ました。",
    detailedDescription:
      "HPの全コーディングおよびWordPress移行を完了しました。\n 制作期間：10日",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    video: oueBeautyVideos[0],
    videos: oueBeautyVideos,
    live_link: "https://oue-c-clinic-beauty.com/",
  },

  {
    id: "endoscope",
    name: "内視鏡専門サイト",
    category: "hp-lp-coding",
    description: "HPコーディング＆Wordpress実装ました。",
    detailedDescription:
      "HPの全コーディングおよびWordPress移行を完了しました。\n 総9ページの構築を4日間で円滑に完了しました。",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    video: endoscopeVideos[0],
    videos: endoscopeVideos,
    live_link: "https://oue-c-clinic-endoscope.com/",
  },

  {
    id: "homeCare",
    name: "訪問診療・看護サイト",
    category: "hp-lp-coding",
    description: "Topページをコーディングしました。",
    detailedDescription:
      "Figmaデザインを基に、1pxの妥協もない忠実なコーディングを行いました。\n 制作期間：2日",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    video: homeCareVideos[0],
    videos: homeCareVideos,
  },

  {
    id: "offshore",
    name: "海外向けwebサービス",
    category: "web-systems",
    description:
      "デザインからコーディング、サーバー配布までワンストップで担当して素敵に完了しました。",
    detailedDescription:
      "・Next.js+Supabase\n・VPS初期設定（SSL／ドメイン連携）\n・問合せフォーム→telegram連携\n・決済機能（stripe and crypto API）連携",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    video: offshoreVideos[0],
    videos: offshoreVideos,
    live_link: "https://offshorehosting.plus/",
  },

  {
    id: "coinani",
    name: "iPhone購入サイト",
    category: "hp-lp-coding",
    description: "アニメーションの実装ました。",
    detailedDescription:
      "アニメーションをJSを使って見事に完成させました。\n 制作期間：3日",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    video: coinaniVideos[0],
    videos: coinaniVideos,
  },

  {
    id: "goyokikidoctor",
    name: "オンライン診療・薬の処方「御用聞きDr.」",
    category: "hp-lp-coding",
    description: "TOPページ改修コーディングました",
    detailedDescription:
      "提供されたFigmaデザインを忠実にコーディングで実装しました。\n 制作期間：2日",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    video: goyokikidoctorVideos[0],
    videos: goyokikidoctorVideos,
    live_link: "https://goyokikidoctor.com/",
  },

  {
    id: "trust",
    name: "九星気学実践ライフデザイン講座",
    category: "hp-lp-coding",
    description: "HP制作ました。",
    detailedDescription:
      "スマートフォン向けのデザインがご用意されていない状況でしたので、私の方でレスポンシブ対応を考慮しつつ調整を行いました。\nまた、トップページに関しましては、ユーザー体験を高めるために複数のアニメーションを実装しております。\n 制作期間：5日",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    video: trustVideos[0],
    videos: trustVideos,
  },
];

export { experiences, projects, services, technologies, testimonials };
