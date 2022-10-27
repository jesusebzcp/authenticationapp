/* eslint-disable react-native/no-inline-styles */
import {Colors} from '@/theme';
import React from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '../AppText';

interface ButtonProps {
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  text: string;
  type?: 'black' | 'white';
}

export const Button = ({
  onPress,
  disabled,
  text,
  type = 'black',
  loading = false,
}: ButtonProps) => {
  switch (type) {
    case 'black':
      return (
        <TouchableOpacity
          disabled={disabled}
          style={[
            styles.button,
            {
              opacity: disabled ? 0.7 : 1,
            },
          ]}
          onPress={onPress}>
          {loading ? <ActivityIndicator /> : <AppText.P text={text} />}
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          disabled={disabled}
          style={[
            styles.buttonWhite,
            {
              opacity: disabled ? 0.7 : 1,
            },
          ]}
          onPress={onPress}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <AppText.P style={styles.textDark} text={text} />
          )}
        </TouchableOpacity>
      );
  }
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark,
    height: 56,
    paddingHorizontal: 20,
    borderRadius: 27,
  },
  buttonWhite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    paddingHorizontal: 20,
    borderRadius: 27,
    borderWidth: 1,
  },
  textDark: {
    color: Colors.dark,
  },
});
