import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
    >
      <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;