import {Colors} from '@/theme';
import React from 'react';
import {Text as RNText, type TextStyle, StyleSheet} from 'react-native';
import {normalize} from './normalize';

export interface CustomTextProps {
  text: string;
  color?: string;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
}

export const AppText = ({
  text,
  style: styleProps,
  numberOfLines,
}: CustomTextProps) => {
  return (
    <RNText style={styleProps} numberOfLines={numberOfLines}>
      {text}
    </RNText>
  );
};

export const textStyles = StyleSheet.create({
  h1: {
    fontSize: normalize(60),
    lineHeight: normalize(56),
    fontWeight: 'bold',
  },
  h2: {
    fontSize: normalize(40),
    lineHeight: normalize(40),
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'bold',

    fontSize: normalize(36),
    lineHeight: normalize(40),
  },

  h4: {
    fontWeight: 'bold',

    fontSize: normalize(24),
    lineHeight: normalize(28),
  },

  h5: {
    fontWeight: 'bold',

    fontSize: normalize(22),
    lineHeight: normalize(24),
  },

  h6: {
    fontWeight: 'bold',

    fontSize: normalize(20),
    lineHeight: normalize(22),
  },
  h6R: {
    fontSize: normalize(20),
    lineHeight: normalize(22),
    fontWeight: '400',
  },
  h6B: {
    fontFamily: 'Poppins-bold',
    fontSize: normalize(20),
    lineHeight: normalize(22),
    fontWeight: 'bold',
  },
  description: {
    fontSize: normalize(20),
    lineHeight: normalize(28),
    fontWeight: '400',
  },
  p: {
    fontSize: normalize(14),
    lineHeight: normalize(22),
    color: Colors.light,
  },
  label: {
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: Colors.dark,
  },
  error: {
    fontSize: normalize(10),
    lineHeight: normalize(22),
    color: Colors.error,
  },
  link: {
    fontSize: normalize(14),
    lineHeight: normalize(22),
    color: Colors.secondary,
  },
  minDescription: {
    fontSize: normalize(12),
    lineHeight: normalize(22),
    color: Colors.secondary,
  },
  title: {
    fontSize: normalize(16),
    lineHeight: normalize(22),
    color: Colors.light,
  },
  small: {
    fontSize: normalize(12),
    lineHeight: normalize(18),
    color: Colors.light,
  },
  tiny: {
    fontSize: normalize(10),
    lineHeight: normalize(10),
    color: Colors.light,
  },
});

const withDefaultStyle =
  (defaultStyle: TextStyle) =>
  (Component: any) =>
  ({style, ...props}: CustomTextProps) =>
    <Component style={[defaultStyle, style]} {...props} />;

//Titles
AppText.H1 = withDefaultStyle(textStyles.h1)(AppText);
AppText.H2 = withDefaultStyle(textStyles.h2)(AppText);
AppText.H3 = withDefaultStyle(textStyles.h3)(AppText);
AppText.H4 = withDefaultStyle(textStyles.h4)(AppText);
AppText.H5 = withDefaultStyle(textStyles.h5)(AppText);
AppText.H6 = withDefaultStyle(textStyles.h6)(AppText);
AppText.H6R = withDefaultStyle(textStyles.h6R)(AppText);
AppText.H6B = withDefaultStyle(textStyles.h6B)(AppText);

//Paragraphs
AppText.DESCRIPTION = withDefaultStyle(textStyles.description)(AppText);
AppText.P = withDefaultStyle(textStyles.p)(AppText);
AppText.LABEL = withDefaultStyle(textStyles.label)(AppText);
AppText.ERROR = withDefaultStyle(textStyles.error)(AppText);
AppText.LINK = withDefaultStyle(textStyles.link)(AppText);
AppText.MIN_DESCRIPTION = withDefaultStyle(textStyles.minDescription)(AppText);
AppText.TITLE = withDefaultStyle(textStyles.title)(AppText);
AppText.SMALL = withDefaultStyle(textStyles.small)(AppText);
AppText.TINY = withDefaultStyle(textStyles.tiny)(AppText);
