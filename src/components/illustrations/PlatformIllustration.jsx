import { motion } from 'framer-motion';
import Ikon from '../../assets/ikon.png'
const PlatformIllustration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[400px] w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg overflow-hidden">
        {/* Integration Lines */}
       
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

        {/* Service Nodes */}
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

       
      </div>
      <div className="flex justify-center items-center h-[400px]">
      <img className="h-1/2 w-auto" src={Ikon} alt="Quantam" />
      </div>
     
    </motion.div>
  );
};

export default PlatformIllustration;