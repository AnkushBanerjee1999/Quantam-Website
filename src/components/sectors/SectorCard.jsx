import { motion } from 'framer-motion';
import AgentList from './AgentList';

const SectorCard = ({ title, description, icon: Icon, agents, capabilities, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
    >
      <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-500" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 font-inter">{title}</h3>
      <p className="text-gray-400 mb-4 font-inter text-sm">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-indigo-400 mb-2 font-inter">Key Capabilities</h4>
        <ul className="space-y-1">
          {capabilities.map((capability) => (
            <li key={capability} className="flex items-center text-sm text-gray-300 font-inter">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 flex-shrink-0" />
              {capability}
            </li>
          ))}
        </ul>
      </div>

      <AgentList agents={agents} />
    </motion.div>
  );
};

export default SectorCard;