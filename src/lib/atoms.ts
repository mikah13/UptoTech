// import { atom } from 'jotai';
// import { Post, PostResponse, BLOGS_TO_FETCH } from '@/lib/type';
// import { fetchUrl, getURLFromPageField } from '@/lib/utils';

// export const postsAtom = atom<PostResponse[]>([]);
// export const asyncPostsAtom = atom(
//   async (get) => get(postsAtom),
//   async (get, set) => {
//     try {
//       const promises = Object.keys(BLOGS_TO_FETCH).map((platform: string) =>
//         fetchUrl(getURLFromPageField(BLOGS_TO_FETCH[platform]))
//       );
//       Promise.all(promises).then((data: PostResponse[]) => {
//         set(postsAtom, data);
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
// );
