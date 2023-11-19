import { fetchUrl, getURLFromPageField } from '@/lib/utils';
import { Post, PostResponse, BLOGS_TO_FETCH } from '@/lib/type';
import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';

import { PostContext } from './context';

type PostProviderProps = {
  children: ReactNode;
};

export const PostContextProvider: React.FC<PostProviderProps> = ({
  children,
}) => {
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    let data: PostResponse[] = [];
    try {
      // const promises = Object.keys(BLOGS_TO_FETCH).map((platform: string) =>
      //   fetchUrl(getURLFromPageField(BLOGS_TO_FETCH[platform]))
      // );
      // Promise.all(promises).then((data: PostResponse[]) => {
      //   setPosts(data);
      //   setLoading(false);
      // });
      Object.keys(BLOGS_TO_FETCH).map(async (platform: string) => {
        let fetchData = await fetchUrl(
          getURLFromPageField(BLOGS_TO_FETCH[platform])
        );
        data.push(fetchData);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [posts, isLoading]);

  return (
    <PostContext.Provider value={{ posts, isLoading }}>
      {children}
    </PostContext.Provider>
  );
};
