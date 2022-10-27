import React, {createContext, useReducer} from 'react';

import charactersReducer, {
  INITIAL_STATE_CHARACTERS,
} from './characters/reducer';

import authReducer, {INITIAL_STATE_AUTH} from './auth/reducer';

import {StoreContextUI} from './entity';

export const Context: any = createContext<StoreContextUI | {}>({});

export const StoreContext = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [charactersState, characterDispatch] = useReducer(
    charactersReducer,
    INITIAL_STATE_CHARACTERS,
  );

  const [authState, authDispatch] = useReducer(authReducer, INITIAL_STATE_AUTH);

  return (
    <Context.Provider
      value={{
        state: {
          charactersState,
          authState,
        },
        characterDispatch,
        authDispatch,
      }}>
      {children}
    </Context.Provider>
  );
};
