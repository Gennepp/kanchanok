import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import wordsReducer from './store/reducers/words';

import WordNavigator from './navigation/WordNavigator';

const rootReducer = combineReducers({
  words: wordsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'baloo-bhaina': require('./assets/fonts/BalooBhaina2-Regular.ttf'),
    'baloo-bhaina-bold': require('./assets/fonts/BalooBhaina2-Bold.ttf'),
    'baloo-bhaina-extra-bold': require('./assets/fonts/BalooBhaina2-ExtraBold.ttf'),
    'baloo-bhaina-med': require('./assets/fonts/BalooBhaina2-Medium.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <WordNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
