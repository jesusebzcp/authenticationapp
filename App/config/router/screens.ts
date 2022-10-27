import {DetailCharacterScreen} from '@/screens/detailCharacterScreen';
import {HomeScreen} from '@/screens/homeScreen';
import {LoginScreen} from '@/screens/loginScreen';
import {RegisterScreen} from '@/screens/registerScreen';
import {StartScreen} from '@/screens/startScreen';

export const screens = {
  public: [
    {
      name: 'StartScreen',
      component: StartScreen,
    },
    {
      name: 'LoginScreen',
      component: LoginScreen,
    },
    {
      name: 'RegisterScreen',
      component: RegisterScreen,
    },
  ],
  private: [
    {
      name: 'HomeScreen',
      component: HomeScreen,
    },
    {
      name: 'DetailCharacterScreen',
      component: DetailCharacterScreen,
      options: {
        presentation: 'modal',
      },
    },
  ],
};
