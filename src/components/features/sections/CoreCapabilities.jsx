import { motion } from 'framer-motion';
import FeatureIcon from '../animations/FeatureIcon';
import { CpuChipIcon, CodeBracketIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';

const capabilities = [
  {
    title: 'Unified Orchestration',
    description: 'Centralized platform to automate, schedule, and monitor complex workflows across distributed environments.',
    icon: CpuChipIcon,
    color: 'indigo'
  },
  {
    title: 'Multi-Language Execution',
    description: 'Supports dynamic scripting in various languages (e.g., JavaScript, Python) to meet diverse operational requirements.',
    icon: CodeBracketIcon,
    color: 'purple'
  },
  {
    title: 'Extensible Architecture',
    description: 'Modular and scalable, allowing integration with legacy systems, modern APIs, and emerging technologies.',
    icon: CubeTransparentIcon,
    color: 'blue'
  }
];

const CoreCapabilities = () => (
  <section className="mb-24">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl font-medium text-white mb-12 text-center"
    >
      Core Capabilities
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {capabilities.map((capability, index) => (
        <motion.div
          key={capability.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
        >
          <FeatureIcon icon={capability.icon} color={capability.color} />
          <h3 className="text-xl font-semibold text-white mt-6 mb-4">{capability.title}</h3>
          <p className="text-gray-300">{capability.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CoreCapabilities;