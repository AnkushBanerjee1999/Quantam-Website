import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { blogPosts } from '../components/blog/data/blogPosts';

const useBlogStore = create(
  persist(
    (set) => ({
      posts: blogPosts,
      addPost: (post) => set((state) => ({
        posts: [{ ...post, date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) }, ...state.posts]
      })),
      deletePost: (slug) => set((state) => ({
        posts: state.posts.filter((post) => post.slug !== slug)
      }))
    }),
    {
      name: 'blog-storage'
    }
  )
);

export default useBlogStore;