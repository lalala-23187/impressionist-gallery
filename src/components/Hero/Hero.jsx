import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const wordVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
});

export function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToGallery = () => {
    document.getElementById('monet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <img
        ref={bgRef}
        className="hero-bg"
        src="./images/monet-water-lilies.jpg"
        alt="Claude Monet - Water Lilies"
        fetchPriority="high"
        referrerPolicy="no-referrer"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.p
          className="hero-eyebrow"
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
        >
          十位大师 · 五十年光辉 · 一场视觉革命
        </motion.p>

        <h1 className="hero-title">
          <span className="hero-title-line">
            {'光的'.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="hero-title-line">
            {'永恒'.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i + 2}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          className="hero-subtitle"
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
        >
          印象派诞生于1874年，一群拒绝学院派束缚的艺术家，用颤动的笔触与纯粹的色彩，将转瞬即逝的光影凝固为永恒。
        </motion.p>

        <motion.button
          className="hero-cta"
          variants={fadeUp(0.95)}
          initial="hidden"
          animate="visible"
          onClick={scrollToGallery}
        >
          进入画廊
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </div>

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">向下滚动</span>
      </div>

      <p className="hero-meta">Claude Monet · Water Lilies · 1906</p>
    </section>
  );
}
