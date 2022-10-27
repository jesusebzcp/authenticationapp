import {LOADING, SET_USER} from './types';

import {Reducer} from '../reducer';

import type {AuthContext} from './entity';

export const INITIAL_STATE_AUTH: AuthContext = {
  loading: false,
  user: null,
};

const setLoading = (state: AuthContext, action: any): AuthContext => {
  return {
    ...state,
    loading: action.payload,
  };
};

const setUser = (state: AuthContext, action: any): AuthContext => {
  return {
    ...state,
    user: action.payload,
  };
};

export default Reducer(INITIAL_STATE_AUTH, {
  [LOADING]: setLoading,
  [SET_USER]: setUser,
});
