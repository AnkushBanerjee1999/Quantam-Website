import { motion } from 'framer-motion';

const SolutionCard = ({ title, description, icon: Icon, features, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
    >
      <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-500" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-gray-300">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SolutionCard;