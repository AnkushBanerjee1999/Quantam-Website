import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBlogState } from './hooks/useBlogState';
import PostMeta from './components/PostMeta';
import PostAuthor from './components/PostAuthor';
import { isWebmaster } from '../../utils/auth';
import { marked } from 'marked';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { posts, deletePost } = useBlogState();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl text-white mb-4">Article not found</h1>
            <Link to="/blog" className="text-indigo-400 hover:text-indigo-300">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(slug);
      navigate('/blog');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <article className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8 flex justify-between items-center">
            <Link to="/blog" className="text-indigo-400 hover:text-indigo-300">
              ← Back to Blog
            </Link>
            {isWebmaster() && (
              <button
                onClick={handleDelete}
                className="text-red-400 hover:text-red-300"
              >
                Delete Post
              </button>
            )}
          </div>

          <PostMeta category={post.category} date={post.date} />
          <h1 className="text-4xl font-medium text-white mb-6">{post.title}</h1>
          <PostAuthor author={post.author} />
          
          <div 
            className="prose prose-invert max-w-none mt-8"
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          />
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;