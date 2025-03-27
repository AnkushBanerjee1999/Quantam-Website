import { motion } from 'framer-motion';
import { SparklesIcon, ClockIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'AI-Driven Insights',
    description: 'Leverages AI to recommend optimizations, predict failures, and enhance operational efficiency.',
    icon: SparklesIcon
  },
  {
    title: 'ActiveMQ-Based Job Scheduling',
    description: 'Reliable and fault-tolerant job scheduling for high-throughput environments.',
    icon: ClockIcon
  },
  {
    title: 'Intelligent Logs Management',
    description: 'Comprehensive logging and analytics for troubleshooting and audit trails.',
    icon: DocumentChartBarIcon
  }
];

const AdvancedFeatures = () => (
  <section className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-medium text-white mb-6"
    >
    Advanced Features
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <feature.icon className="w-6 h-6 text-indigo-500" />
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
          </div>
          <p className="text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AdvancedFeatures;