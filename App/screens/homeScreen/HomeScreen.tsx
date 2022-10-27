import React, {useCallback, useContext, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Context} from '@/core/StoreContext';

import type {StoreContextUI} from '@/core/entity';
import {getCharactersDispatch} from '@/core/characters/actions';
import {Character} from '@/components/Character';
import {Colors, Metrics} from '@/theme';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/config/router/entitys';
import {AppText} from '@/components/AppText';
import {Button} from '@/components/Buttons';
import {singOutDispatch} from '@/core/auth/actions';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {state, characterDispatch, authDispatch}: StoreContextUI =
    useContext(Context);

  const {charactersState} = state;
  const {characters} = charactersState;

  const handleSingOut = useCallback(() => {
    singOutDispatch(authDispatch);
  }, [authDispatch]);

  useEffect(() => {
    getCharactersDispatch(characterDispatch);
  }, [characterDispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText.H3 text={'The most important characters'} />
      </View>
      <FlatList
        horizontal
        data={characters}
        renderItem={({item}) => (
          <Character
            item={item}
            onPress={() =>
              navigation.navigate('DetailCharacterScreen', {
                character: item,
              })
            }
          />
        )}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
      <Button onPress={handleSingOut} text="Sing out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.addHeader + 20,
    backgroundColor: Colors.light,
  },
  header: {
    marginVertical: 15,
    alignItems: 'center',
  },
});
