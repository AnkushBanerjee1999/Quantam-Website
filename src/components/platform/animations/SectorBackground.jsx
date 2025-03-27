import { motion } from 'framer-motion';

const SectorBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Connection Lines */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`line-${i}`}
        className="absolute h-0.5 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10"
        style={{
          top: `${15 + i * 14}%`,
          left: '-20%',
          right: '-20%',
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
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`node-${i}`}
        className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
        style={{
          top: `${Math.random() * 70 + 15}%`,
          left: `${Math.random() * 70 + 15}%`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 2.5,
          delay: i * 0.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

export default SectorBackground;