'use client';
import { BLOGS_TO_FETCH } from '@/lib/type';
import { fetchUrl, getURLFromPageField } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const promises = Object.keys(BLOGS_TO_FETCH).map((platform: string) =>
        fetchUrl(getURLFromPageField(BLOGS_TO_FETCH[platform]))
      );
      Promise.all(promises).then((data) => {
        console.log(data);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  return (
    <main className='flex  h-screen max-h-screen flex-col items-center justify-between p-6'></main>
  );
}
