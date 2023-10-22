import { atom } from 'jotai';
import { PostResponse } from './type';

export const postAtom = atom<PostResponse[]>([]);
