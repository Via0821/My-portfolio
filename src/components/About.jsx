import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        {/* <p className={styles.sectionSubText}>自己紹介</p> */}
        <h2 className={styles.sectionHeadText}>自己紹介</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        はじめまして。
        <br />
        IT業界で10年以上の開発経験を持つフリーランスエンジニアの金本卓弥です。
        <br />
        これまで、システム開発・Webアプリケーション開発・業務効率化支援を中心に、さまざまなプロジェクトに携わってまいりました。
        <br />
        要件定義から設計、実装、運用改善まで一貫して対応し、現場の課題に合わせた実用性の高い開発を行ってきました。品質や保守性を重視しながら、円滑なコミュニケーションを大切にし、プロジェクトの成功に貢献してまいりました。
        <br />
        <br />
        私のモットーは「楽しい道よりも、将来楽しくなる道を選ぶ」ことです。
        <br />
        目の前の成果だけでなく、将来の成長や継続的な改善につながる選択を大切にしています。
        <br />
        開発においても、単に「表示される」「動作する」だけで満足せず、将来の機能追加、保守、運用のしやすさを意識し、て実装するよう心がけています。
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
