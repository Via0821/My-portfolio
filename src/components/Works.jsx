import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../style";
import { close } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, PROJECT_CATEGORIES } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const LoopVideo = ({ src, className }) => (
  <video
    src={src}
    autoPlay
    loop
    muted
    playsInline
    className={className}
  />
);

const ProjectMedia = ({ images, videos, name }) => {
  const media = videos?.length ? videos : images;
  const isVideo = Boolean(videos?.length);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = media?.length ?? 0;

  const goTo = (index) => {
    setCurrentIndex((index + total) % total);
  };

  if (total === 0) return null;

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[220px] sm:h-[360px] overflow-hidden rounded-2xl bg-black-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            {isVideo ? (
              <LoopVideo
                src={media[currentIndex]}
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={media[currentIndex]}
                alt={`${name} screenshot ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => goTo(currentIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-white text-lg hover:opacity-80"
            >
              &#8249;
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => goTo(currentIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-white text-lg hover:opacity-80"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {media.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to item ${i + 1}`}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? "bg-[#804dee]" : "bg-secondary/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-modal-${project.id}`}
    >
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-tertiary rounded-2xl p-5 sm:p-8 shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black-100 hover:bg-black-200 transition-colors"
        >
          <img src={close} alt="" className="w-4 h-4 object-contain" />
        </button>

        <ProjectMedia
          key={project.id}
          images={project.images}
          videos={project.videos}
          name={project.name}
        />

        <div className="mt-6 pr-6">
          <h3
            id={`project-modal-${project.id}`}
            className="text-white font-bold text-[24px] sm:text-[28px]"
          >
            {project.name}
          </h3>
          <p className="mt-4 text-secondary text-[15px] sm:text-[16px] leading-[28px] whitespace-pre-line">
            {project.detailedDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <p
                key={`${project.id}-detail-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-[#804dee] text-white text-[14px] font-medium hover:opacity-90 transition-opacity"
            >
              サイトを見る &rarr;
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({
  index,
  id,
  name,
  description,
  tags,
  image,
  video,
  live_link,
  isSelected,
  onOpen,
}) => {
  const cardContent = (
    <div
      onClick={onOpen}
      className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer transition-shadow ${
        isSelected ? "ring-2 ring-[#804dee]" : ""
      }`}
    >
      <div className="relative w-full h-[230px]">
        {video ? (
          <LoopVideo
            src={video}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        )}
        <div className="absolute inset-0 flex justify-end items-start m-3">
          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="black-gradient px-3 py-1.5 rounded-full text-white text-[12px] font-medium hover:opacity-80 transition-opacity"
            >
              サイトを見る
            </a>
          )}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${id}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        duration: 0.75,
        delay: index * 0.1,
      }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        {cardContent}
      </Tilt>
    </motion.div>
  );
};

const CategoryTabs = ({ activeCategory, onChange }) => {
  return (
    <div className="mt-10 overflow-x-auto">
      <div className="flex gap-6 sm:gap-8 whitespace-nowrap border-b border-white/10 pb-1 min-w-min">
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onChange(category.id)}
            className={`text-[15px] sm:text-[16px] font-medium pb-3 transition-colors ${
              activeCategory === category.id
                ? "text-white border-b-2 border-[#804dee]"
                : "text-secondary hover:text-white"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSelectedProjectId(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          ここでは、私がかかわってきたプロジェクトの一部を紹介します。<br />
          実績は載せていますが、すべてではありません。企業に在籍していた際の開発実績については、秘密保持契約（NDA）の関係で、具体的な内容や成果数値を公開できないので、その点はご了承ください。
        </motion.p>
      </div>

      <CategoryTabs
        activeCategory={activeCategory}
        onChange={handleCategoryChange}
      />

      <div className="mt-10 flex flex-wrap gap-7">
        {filteredProjects.length === 0 ? (
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-secondary text-[17px] leading-[30px]"
          >
            申し訳ございませんが、現時点では公開可能な実績がございません。
          </motion.p>
        ) : (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${activeCategory}-${project.id}`}
              index={index}
              isSelected={selectedProjectId === project.id}
              onOpen={() => setSelectedProjectId(project.id)}
              {...project}
            />
          ))
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProjectId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "");
