import useBlogStore from '../../../utils/blogStore';

export const useBlogState = () => {
  const store = useBlogStore();
  return {
    posts: store.posts,
    addPost: store.addPost,
    deletePost: store.deletePost
  };
};