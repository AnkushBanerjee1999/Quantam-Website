import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { isWebmaster } from '../../utils/auth';

const BlogHeader = () => (
  <div className="text-center mb-12">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl font-medium text-white mb-4"
    >
      Latest Insights & News
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-gray-400 max-w-2xl mx-auto mb-8"
    >
      Explore our latest thoughts on AI, technology trends, and digital transformation
    </motion.p>
    {isWebmaster() && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/blog/admin/new"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create New Post
        </Link>
      </motion.div>
    )}
  </div>
);

export default BlogHeader;