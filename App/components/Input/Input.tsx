/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker, {DatePickerProps} from 'react-native-date-picker';
import dayjs from 'dayjs';

import {Colors} from '@/theme';

import {AppText} from '../AppText';

export interface InputProps {
  IconRight?: any;
  IconLeft?: any;
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  error?: string;
  required?: boolean;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  type?: 'text' | 'password' | 'textSecondary' | 'textarea' | 'date';
  customStyles?: any;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  focusableColor?: boolean;
  fill?: string;
  disabled?: boolean;
  color?: boolean;
  onFocus?: () => void;
  black?: boolean;
  propsDatePicker?: DatePickerProps;
}

export const Input = ({
  label,
  placeholder = 'Hello',
  error,
  required = false,
  IconLeft,
  IconRight,
  onChangeText,
  customStyles = {},
  value,
  onBlur,
  keyboardType,
  disabled = false,
  onFocus,
  color = false,
  type = 'text',
  black = true,
  propsDatePicker,
}: InputProps) => {
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);

  const _handleOnFocus = useCallback(() => {
    onFocus && onFocus();
    setFocus(prev => !prev);
  }, [onFocus]);

  const _handleOnBlur = useCallback(() => {
    onBlur && onBlur();
    setFocus(prev => !prev);
  }, [onBlur]);
  const handleOnChange = (dateValue: Date) => {
    onChangeText(dateValue.toDateString());
  };

  switch (type) {
    case 'date':
      return (
        <View>
          {label && (
            <AppText.LABEL
              text={label}
              style={{
                color: error
                  ? Colors.error
                  : black
                  ? Colors.dark
                  : Colors.light,
              }}
            />
          )}
          <TouchableOpacity
            style={[
              styles.contentInput,
              {
                borderBottomColor: error
                  ? Colors.error
                  : focus
                  ? Colors.primary
                  : Colors.bgInput,
                borderBottomWidth: 1,
              },
            ]}
            onPress={() => setOpen(prev => !prev)}>
            <View style={[styles.contentInput]}>
              {IconLeft && (
                <TouchableOpacity style={styles.icon}>
                  <IconLeft />
                </TouchableOpacity>
              )}
              <TextInput
                editable={false}
                onBlur={onBlur}
                value={dayjs(value).format('DD/MM/YYYY')}
                onChangeText={onChangeText}
                placeholderTextColor={Colors.disabled}
                placeholder={required ? `${placeholder}*` : placeholder}
                style={[
                  styles.input,
                  {color: color && value.trim() ? value : Colors.dark},
                ]}
                selectionColor={Colors.disabled}
              />
            </View>
            {error && <AppText.ERROR text={error} style={styles.error} />}

            <DatePicker
              modal
              title={placeholder}
              {...propsDatePicker}
              confirmText={'Confirmar'}
              cancelText={'Cancelar'}
              theme={'auto'}
              open={open}
              mode={'date'}
              date={value ? new Date(value) : new Date()}
              onConfirm={dateParams => {
                handleOnChange(dateParams);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </TouchableOpacity>
        </View>
      );

    default:
      return (
        <View style={customStyles}>
          {label && (
            <AppText.LABEL
              text={label}
              style={{
                color: error
                  ? Colors.error
                  : black
                  ? Colors.dark
                  : Colors.light,
              }}
            />
          )}
          <View
            style={[
              styles.contentInput,
              {
                borderBottomColor: error
                  ? Colors.error
                  : focus
                  ? Colors.primary
                  : Colors.bgInput,
                borderBottomWidth: 1,
              },
            ]}>
            {IconLeft && (
              <TouchableOpacity style={styles.icon}>
                <IconLeft />
              </TouchableOpacity>
            )}
            <TextInput
              editable={!disabled}
              keyboardType={keyboardType}
              onBlur={_handleOnBlur}
              value={value as string}
              onChangeText={onChangeText}
              placeholderTextColor={Colors.gray}
              placeholder={required ? `${placeholder}*` : placeholder}
              style={[
                styles.input,
                {color: color && value.trim() ? value : Colors.dark},
              ]}
              selectionColor={error ? Colors.error : Colors.dark}
              onFocus={_handleOnFocus}
              secureTextEntry={type === 'password'}
            />
            {IconRight && (
              <TouchableOpacity style={styles.icon}>
                <IconRight />
              </TouchableOpacity>
            )}
          </View>
          {error && <AppText.ERROR text={error} style={styles.error} />}
        </View>
      );
  }
};

const styles = StyleSheet.create({
  contentInput: {
    height: 56,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  error: {
    textAlign: 'right',
  },
  input: {
    flex: 3,
    height: 56,
  },
  icon: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 40,
  },
});
