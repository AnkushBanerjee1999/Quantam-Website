import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';

const AddAppButton = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <PlusIcon className="w-6 h-6" />
  </motion.button>
);

export default AddAppButton;