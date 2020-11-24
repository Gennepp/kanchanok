import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo' ;

import Header from './components/Header';
import LoginPfScreen from './screen/LoginPfScreen';
import Teach_errorScreen from './screen/Teach_errorScreen';
import About_usScreen from './screen/About_usScreen';
import ProfileScreen from './screen/ProfileScreen';
import Meaning from './screen/Meaning';
import AcsetScreen from './screen/AcsetScreen';
import SearchScreen from './screen/SearchScreen';
import WelcomeScreen from './screen/WelcomeScreen';

import WordNavigator from './navigation/WordNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'baloo-bhaina': require('./assets/fonts/BalooBhaina2-Regular.ttf'),
    'baloo-bhaina-bold': require('./assets/fonts/BalooBhaina2-Bold.ttf'),
    'baloo-bhaina-extra-bold': require('./assets/fonts/BalooBhaina2-ExtraBold.ttf'),
    'baloo-bhaina-med': require('./assets/fonts/BalooBhaina2-Medium.ttf')
  });
};

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);

    if(!dataLoaded){
        return (
            <AppLoading
              startAsync={fetchFonts}
              onFinish={() => setDataLoaded(true)}
              onError={(err) => console.log(err)}
            />
        );
    }

  return  (
    <View style={styles.screen}>
      {/* <Header title="Dictionary" /> */}
      {/* <LoginPfScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <Teach_errorScreen /> */}
      {/* <About_usScreen /> */}
      {/* <ProfileScreen/> */}
      {/* <Meaning/> */}
      {/* <AcsetScreen/> */}
      {/* < SearchScreen/> */}
      <WelcomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
