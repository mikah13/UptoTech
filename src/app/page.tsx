import { BLOGS_TO_FETCH } from '@/lib/type';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Object.keys(BLOGS_TO_FETCH).map((platform: string) => {
    });
  }, []);

  return (
    <main className='flex  h-screen max-h-screen flex-col items-center justify-between p-6'></main>
  );
}
