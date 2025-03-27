import { motion } from 'framer-motion';
import { features } from '../data/features';
import FeatureCard from '../FeatureCard';

const FeaturesList = () => {
  return (
    <section className="mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-medium text-white mb-8 text-center"
      >
        Core Features
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesList;