import {Dimensions, Platform} from 'react-native';

import {isIphoneX} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');
const isXSeriesIphone = isIphoneX();

const addFooter = Platform.OS === 'ios' && isXSeriesIphone ? 20 : 0;
const addHeader = Platform.OS === 'ios' ? (isXSeriesIphone ? 40 : 20) : 0;

export const Metrics = {
  videoExpanded: (1080 / 1942) * width,
  bigImage: (1200 / 1080) * width,
  socialIcon: 30,
  header: 60 + addHeader,
  addHeader,
  footerMenu: 50 + addFooter,
  contentWidth: width * 0.9,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
