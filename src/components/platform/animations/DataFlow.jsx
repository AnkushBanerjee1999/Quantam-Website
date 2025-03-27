import { motion } from 'framer-motion';

const DataFlow = ({ pathPoints, color = 'indigo' }) => (
  <motion.div
    className={`absolute w-2 h-2 bg-${color}-500 rounded-full`}
    animate={{
      offsetPath: `path("${pathPoints}")`,
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    }}
    style={{
      offsetPath: `path("${pathPoints}")`,
    }}
  />
);

export default DataFlow;