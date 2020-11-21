import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import LoginPfScreen from './screen/LoginPfScreen';

import WordNavigator from './navigation/WordNavigator';

export default function App() {
  return (
    <View style={styles.screen}>
      {/* <Header title="Dictionary" /> */}
      <LoginPfScreen />
      {/* <SignUpScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
