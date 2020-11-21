import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import Header from './components/Header';
import LoginPfScreen from './screen/LoginPfScreen';

import WordNavigator from './navigation/WordNavigator';


const fetchFonts = () => {
  Font.loadA
};

export default function App() {
  return  (
    <WordNavigator />
    // <View style={styles.screen}>
    //   {/* <Header title="Dictionary" /> */}
    //   <LoginPfScreen />
    //   {/* <SignUpScreen /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
