import {
  createContext,
} from 'react';
import { Post, PostResponse, Context } from '@/lib/type';

export const PostContext = createContext<Context>({
  posts: [],
  isLoading: true,
});
