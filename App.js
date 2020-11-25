import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import wordsReducer from './store/reducers/words';
import favReducer from './store/reducers/favorite';
import hisReducer from './store/reducers/history';

import WordNavigator from './navigation/WordNavigator';

const rootReducer = combineReducers({
  words: wordsReducer,
  favorite: favReducer,
  history: hisReducer,
});

//composeWithDevTools()
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
