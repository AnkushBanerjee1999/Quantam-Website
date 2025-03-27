import { motion } from 'framer-motion';

const ConnectionLine = ({ start, end, delay = 0 }) => (
  <motion.div
    className="absolute h-0.5 bg-gradient-to-r from-indigo-500/50 to-purple-500/50"
    style={{
      left: `${start}%`,
      width: `${end - start}%`,
      top: '50%',
      transformOrigin: 'left',
    }}
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export default ConnectionLine;