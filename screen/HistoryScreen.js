import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import { Ionicons} from '@expo/vector-icons'
import bgImage from "../assets/History.png";
import Block from "../components/Blocknoshadow";

const HistoryScreen = (props) => {
  // console.log(props);
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >

           <KeyboardAvoidingView
                    behavior='position'
                    contentContainerStyle={styles.screen}
                    keyboardVerticalOffset={20}
                    style={styles.screen}
                >

        <View style={styles.screen}>
          {/* <Text style={styles.title}>You TEACH</Text>
                    <Text style={styles.subTitle}>I LEARN</Text> */}
                    

          <Text style={styles.HisText}> History </Text>

          

                    <Ionicons 
                    name="ios-trash" 
                    size={40} 
                    color="#fff"
                    style={{ marginTop: -75, marginLeft: 290 }} />

          <Block style={styles.HisBlock}>

          </Block>
        </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    height: null,
    width: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    
  },
  

  HisText: {
    color: "#ffffff",
    fontSize: 50,
    textAlign: "center",
    fontFamily: "baloo-bhaina",
    marginTop: 80,
    marginLeft: -180,
  },

  HisBlock: {
    marginTop: 25,
    borderRadius: 15,
    backgroundColor: 'rgba(256,256,256,0.8)'
  },
 
});

export default HistoryScreen;