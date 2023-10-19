import { Post, PostResponse } from '@/lib/type';
import { ReactNode, createContext, useState, useContext } from 'react';

interface Context {
  posts: PostResponse[] | [];
  setPosts: (p: PostResponse[]) => void;
}

export const PostContext = createContext<Context | undefined>(undefined);

type PostProviderProps = {
  children: ReactNode;
};

export const PostContextProvider: React.FC<PostProviderProps> = ({
  children,
}) => {
  const [posts, setPosts] = useState<PostResponse[]>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
