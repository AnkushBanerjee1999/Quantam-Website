import { motion } from 'framer-motion';

const ConnectionLines = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
        style={{
          top: `${20 + i * 15}%`,
          left: '0',
          right: '0',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: 1,
          opacity: [0, 1, 1, 0],
          transition: {
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />
    ))}
  </div>
);

export default ConnectionLines;