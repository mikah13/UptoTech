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
  isLoading: boolean;
}

export const PostContext = createContext<Context>({
  posts: [],
  isLoading: true,
});

type PostProviderProps = {
  children: ReactNode;
};

export const PostContextProvider: React.FC<PostProviderProps> = ({
  children,
}) => {
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log('call post context from provicer', isLoading);
    try {
      const promises = Object.keys(BLOGS_TO_FETCH).map((platform: string) =>
        fetchUrl(getURLFromPageField(BLOGS_TO_FETCH[platform]))
      );
      Promise.all(promises).then((data: PostResponse[]) => {
        setPosts(data);
        setLoading(false);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);
  return (
    <PostContext.Provider value={{ posts, isLoading }}>
      {children}
    </PostContext.Provider>
  );
};
