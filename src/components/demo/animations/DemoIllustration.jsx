import { motion } from 'framer-motion';

const DemoIllustration = () => (
  <div className="relative h-[400px]">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg overflow-hidden"
    >
      {/* Animated Lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-0.5 bg-gradient-to-r from-indigo-500/50 to-purple-500/50"
          style={{
            top: `${15 + i * 14}%`,
            left: '0',
            right: '0',
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Floating Nodes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2.5 h-2.5 bg-indigo-500 rounded-full"
          style={{
            top: `${Math.random() * 70 + 15}%`,
            left: `${Math.random() * 70 + 15}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Central Platform Hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(99, 102, 241, 0.3)',
              '0 0 40px rgba(99, 102, 241, 0.5)',
              '0 0 20px rgba(99, 102, 241, 0.3)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute inset-2 bg-gray-900/20 rounded-full backdrop-blur-sm" />
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
);

export default DemoIllustration;