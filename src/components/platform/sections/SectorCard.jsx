import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const SectorCard = ({ title, description, icon: Icon, capabilities, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-colors group"
  >
    <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600/30 transition-colors">
      <Icon className="w-6 h-6 text-indigo-500" />
    </div>
    
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300 mb-4 text-sm">{description}</p>
    
    <ul className="space-y-2">
      {capabilities.slice(0, 4).map((capability) => (
        <li key={capability} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
          <ChevronRightIcon className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
          {capability}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default SectorCard;