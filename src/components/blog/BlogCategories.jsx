import { motion } from 'framer-motion';
import { categories } from './data/blogCategories';

const BlogCategories = ({ selected, onSelect }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="flex flex-wrap gap-2"
  >
    {categories.map((category, index) => (
      <button
        key={category.id}
        onClick={() => onSelect(category.id)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selected === category.id
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
        }`}
      >
        {category.name}
      </button>
    ))}
  </motion.div>
);

export default BlogCategories;