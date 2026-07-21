import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useGallery } from '../../context/GalleryContext';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import './Lightbox.css';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.28 } },
};

const imagePanelVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.22 } },
};

const infoPanelVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, x: 24, transition: { duration: 0.22 } },
};

function LightboxContent({ artwork }) {
  const { setOpenArtwork } = useGallery();
  useLockBodyScroll(true);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenArtwork(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpenArtwork]);

  return (
    <motion.div
      className="lightbox-overlay"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.target === e.currentTarget && setOpenArtwork(null)}
    >
      <div className="lightbox-inner">
        <motion.div className="lightbox-image-side" variants={imagePanelVariants} initial="hidden" animate="visible" exit="exit">
          <img
            className="lightbox-img"
            src={artwork.image}
            alt={artwork.titleCN}
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div className="lightbox-info-side" variants={infoPanelVariants} initial="hidden" animate="visible" exit="exit">
          <p className="lightbox-eyebrow">作品详情</p>
          <h2 className="lightbox-title">{artwork.title}</h2>
          <p className="lightbox-title-cn">{artwork.titleCN}</p>
          <div className="lightbox-divider" />

          <div className="lightbox-meta">
            <div className="lightbox-meta-row">
              <span className="lightbox-meta-label">年份</span>
              <span className="lightbox-meta-value">{artwork.year}</span>
            </div>
            <div className="lightbox-meta-row">
              <span className="lightbox-meta-label">馆藏</span>
              <span className="lightbox-meta-value">{artwork.museum}</span>
            </div>
            {artwork.medium && (
              <div className="lightbox-meta-row">
                <span className="lightbox-meta-label">媒介</span>
                <span className="lightbox-meta-value">{artwork.medium}</span>
              </div>
            )}
            {artwork.dimensions && (
              <div className="lightbox-meta-row">
                <span className="lightbox-meta-label">尺寸</span>
                <span className="lightbox-meta-value">{artwork.dimensions}</span>
              </div>
            )}
          </div>

          <p className="lightbox-description">{artwork.description}</p>
        </motion.div>
      </div>

      <button className="lightbox-close" onClick={() => setOpenArtwork(null)} aria-label="关闭">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
    </motion.div>
  );
}

export function Lightbox() {
  const { openArtwork } = useGallery();

  return createPortal(
    <AnimatePresence>
      {openArtwork && <LightboxContent key="lightbox" artwork={openArtwork} />}
    </AnimatePresence>,
    document.body
  );
}
