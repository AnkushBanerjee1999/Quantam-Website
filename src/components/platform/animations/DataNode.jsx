import { motion } from 'framer-motion';

const DataNode = ({ x, y, type, label }) => {
  const colors = {
    data: 'bg-blue-500',
    integration: 'bg-green-500',
    ai: 'bg-purple-500',
    automation: 'bg-orange-500',
    visualization: 'bg-indigo-500'
  };

  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className={`${colors[type]} p-2 rounded-lg shadow-lg backdrop-blur-sm`}>
        <span className="text-xs font-medium text-white whitespace-nowrap">{label}</span>
      </div>
    </motion.div>
  );
};

export default DataNode;