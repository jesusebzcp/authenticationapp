import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SvgBackIcon = (props: SvgProps) => (
  <Svg width={16} height={13} fill="none" {...props}>
    <Path
      d="M16 6.5a.722.722 0 0 0-.629-.713l-.098-.007H2.488l4.619-4.55A.714.714 0 0 0 7.109.212.733.733 0 0 0 6.162.14l-.081.07L.214 5.99A.724.724 0 0 0 0 6.472v.056l.003.042L0 6.5a.716.716 0 0 0 .143.429l.006.008c.02.025.041.05.064.072l5.868 5.781c.284.28.745.28 1.028-.002a.714.714 0 0 0 .069-.937l-.071-.08L2.49 7.22l12.783-.001A.723.723 0 0 0 16 6.5Z"
      fill="#fff"
    />
  </Svg>
);
