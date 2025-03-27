import { motion } from 'framer-motion';

const FeatureNode = ({ x, y, label, color = 'indigo', delay = 0 }) => (
  <motion.div
    className="absolute flex items-center gap-2"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <motion.div
      className={`w-3 h-3 bg-${color}-500 rounded-full`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <span className="text-xs text-gray-300 whitespace-nowrap">{label}</span>
  </motion.div>
);

export default FeatureNode;