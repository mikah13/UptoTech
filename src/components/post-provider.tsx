import { fetchUrl, getURLFromPageField } from '@/lib/utils';
import { Post, PostResponse, BLOGS_TO_FETCH } from '@/lib/type';
import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';

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

  useEffect(() => {
    try {
      const promises = Object.keys(BLOGS_TO_FETCH).map((platform: string) =>
        fetchUrl(getURLFromPageField(BLOGS_TO_FETCH[platform]))
      );
      Promise.all(promises).then((data: PostResponse[]) => {
        setPosts(data);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
