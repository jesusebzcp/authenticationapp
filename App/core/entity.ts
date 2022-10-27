import {AuthContext} from './auth/entity';
import type {CharactersContext} from './characters/entity';

export interface StoreContextUI {
  state: {
    charactersState: CharactersContext;
    authState: AuthContext;
  };
  characterDispatch: () => void;
  authDispatch: () => void;
}
