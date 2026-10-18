export function AboutIntro() {
  return (
    <section id="about" className="about-band scroll-mt-24" aria-labelledby="about-title">
      <img className="about-bg about-bg-pc" src="/about-bg.webp" alt="" loading="lazy" />
      <img className="about-bg about-bg-sp" src="/about-bg_sp.webp" alt="" loading="lazy" />
      <div className="about-panel">
        <div className="about-index">
          <p className="about-num">01</p>
          <span className="about-rule" aria-hidden="true" />
          <p className="about-en">ABOUT</p>
        </div>

        <div className="about-copy" data-reveal>
          <h2 id="about-title" className="about-title">
            私について
          </h2>
          <ul className="about-facts">
            <li>金本卓弥</li>
            <li>40代前半</li>
            <li>神奈川県</li>
          </ul>
          <p className="about-body">
            2018 年より約 8 年間、Web アプリケーション・業務システムの開発に従事。React / Next.js / TypeScript を中心としたフロントエンド開発を主軸に、業務画面の設計・実装、API 連携、共通 UI コンポーネントの整備、性能改善、チーム開発まで幅広く経験してきました。
          </p>
        </div>
      </div>
    </section>
  );
}
