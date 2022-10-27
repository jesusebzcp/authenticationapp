import {KEYS} from '@/keys';

export const generateUrlRickAndMorty = (path: string): string =>
  `${KEYS.BASE_URL_RICK_AND_MORTY}${path}`;
export const generateUrlServer = (path: string): string =>
  `${KEYS.BASE_URL}${path}`;
