import { motion } from 'framer-motion';
import { integrationFeatures } from '../data/features';

const IntegrationFeatures = () => {
  return (
    <section>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-medium text-white mb-8 text-center"
      >
        Integration Capabilities
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrationFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationFeatures;