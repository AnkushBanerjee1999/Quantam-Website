import { motion } from 'framer-motion';

const PlatformCore = () => (
  <motion.div
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="relative w-24 h-24"
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-lg"
        animate={{
          boxShadow: [
            '0 0 20px rgba(99, 102, 241, 0.3)',
            '0 0 40px rgba(99, 102, 241, 0.5)',
            '0 0 20px rgba(99, 102, 241, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-2 bg-gray-900/20 rounded-full backdrop-blur-sm" />
      </motion.div>
    </motion.div>
  </motion.div>
);

export default PlatformCore;