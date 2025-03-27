import { motion } from 'framer-motion';
import { CloudIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Cloud and On-Premise Hosting',
    description: 'Flexible deployment options to suit business needs.',
    icon: CloudIcon
  },
  {
    title: 'AWS Ecosystem Integration',
    description: 'Utilizes AWS EC2 for hosting and S3 for storage, ensuring reliability and scalability.',
    icon: ServerIcon
  },
  {
    title: 'High Availability',
    description: 'Built with redundancy and failover mechanisms to minimize downtime.',
    icon: ShieldCheckIcon
  }
];

const DeploymentHosting = () => (
  <section className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-medium text-white mb-6"
    >
    Deployment and Hosting
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

export default DeploymentHosting;