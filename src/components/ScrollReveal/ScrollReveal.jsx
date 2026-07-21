import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const directionMap = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { y: 0, x: 48 },
  right: { y: 0, x: -48 },
  none: { y: 0, x: 0 },
};

export function ScrollReveal({ children, direction = 'up', delay = 0, className }) {
  const [ref, inView] = useInView();
  const { y, x } = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
