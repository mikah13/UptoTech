import { useContext } from 'react';
import { PostContext } from '../post-provider';

export const usePosts = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('useUpload must be used within a provider');
  }
  return context;
};
