import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { Post, PostResponse, BLOGS_TO_FETCH, Context } from '@/lib/type';

export const PostContext = createContext<Context>({
  posts: [],
  isLoading: true,
});
