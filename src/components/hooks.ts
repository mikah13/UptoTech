import { useState, useEffect, useContext } from 'react';
import { PostContext } from './context';
import { fetchUrl, getURLFromPageField } from '@/lib/utils';
import { PostResponse } from '@/lib/type';
import { BLOGS_TO_FETCH } from '@/blogs.config';

export const usePosts = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('useUpload must be used within a provider');
  }
  return context;
};

function useDataFetcher(platform: string) {
  const [data, setData] = useState<PostResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchUrl(
          getURLFromPageField(BLOGS_TO_FETCH[platform])
        );
        setData(response);
      } catch (err: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [platform]);

  return { data, loading, error };
}

export default useDataFetcher;
