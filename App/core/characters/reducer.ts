import {GET_CHARACTERS, LOADING} from './types';

import {Reducer} from '../reducer';

import type {CharactersContext} from './entity';

export const INITIAL_STATE_CHARACTERS: CharactersContext = {
  loading: false,
  characters: [],
};

const setLoading = (
  state: CharactersContext,
  action: any,
): CharactersContext => {
  return {
    ...state,
    loading: action.payload,
  };
};
const getCharacters = (
  state: CharactersContext,
  action: any,
): CharactersContext => {
  return {
    ...state,
    characters: action.payload,
  };
};

export default Reducer(INITIAL_STATE_CHARACTERS, {
  [LOADING]: setLoading,
  [GET_CHARACTERS]: getCharacters,
});
