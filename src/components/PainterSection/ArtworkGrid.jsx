import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { ArtworkTile } from './ArtworkTile';
import './PainterSection.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function ArtworkGrid({ artworks }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      className="artwork-grid"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {artworks.map((artwork) => (
        <motion.div key={artwork.id} variants={itemVariants}>
          <ArtworkTile artwork={artwork} />
        </motion.div>
      ))}
    </motion.div>
  );
}
