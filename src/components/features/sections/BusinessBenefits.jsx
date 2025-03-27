import { motion } from 'framer-motion';
import { ChartBarIcon, LightBulbIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Enhanced Productivity',
    description: 'Automates repetitive tasks, freeing resources for strategic initiatives.',
    icon: ChartBarIcon
  },
  {
    title: 'Improved Decision-Making',
    description: 'Real-time insights and analytics provide actionable data for operational improvements.',
    icon: LightBulbIcon
  },
  {
    title: 'Scalable Growth',
    description: 'Modular architecture grows with the business, accommodating increased demand and complexity.',
    icon: ArrowTrendingUpIcon
  }
];

const BusinessBenefits = () => (
  <section className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-medium text-white mb-6"
    >
    Business Benefits
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <benefit.icon className="w-6 h-6 text-indigo-500" />
            <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
          </div>
          <p className="text-gray-300">{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default BusinessBenefits;