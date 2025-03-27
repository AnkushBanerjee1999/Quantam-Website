import { motion } from 'framer-motion';
import { categoryDescriptions } from './data/apps';

const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
    {selected !== 'All' && (
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-400 text-sm"
      >
        {categoryDescriptions[selected]}
      </motion.p>
    )}
  </div>
);

export default CategoryFilter;