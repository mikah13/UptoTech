import { createContext } from 'react';
import { Context } from '@/lib/type';

export const PostContext = createContext<Context>({
  posts: [],
  isLoading: true,
});
