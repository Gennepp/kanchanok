import React from "react";
import {
  ImageBackground,
  View, Text, TextInput,
  StyleSheet, Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
// import { MaterialIcons} from '@expo/vector-icons'

import {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Input from "../components/Input";
import Buttons from "../components/Button";
import Colors from "../constants/color";
import Block from "../components/Block";

import bgImage from "../assets/Forgot.png";

const ForgotScreen = props => {
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
            {/* <MaterialIcons
              name="navigate-before"
              size={60}
              color="white"

              style={{ marginTop: 35, marginLeft: -345 }}
            /> */}

            <Text style={styles.PassText}> FORGOT PASSWORD? </Text>

            <Block style={styles.ForgotpassBlock}>

              <Text style={styles.DesPassText}> Enter the email you used when you joined and we’ll send you temporary password. </Text>

              <View style={styles.inputContainer}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={30}
                  color="#3F1F72"
                  style={{ marginTop: 45, marginLeft: 21 }}
                />
                <Input
                  style={styles.inputmail}
                  placeholder={"E-mail"}
                  placeholderTextColor={Colors.primary}
                  autoCorrect={false}
                  autoCapitalize="none"
                  maxLength={50}
                // underlineColorAndroid='transparent'
                />
              </View>

              <Buttons style={styles.btnpass}>
                <Text style={styles.Text}>SEND PASSWORD</Text>
              </Buttons>

            </Block>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

ForgotScreen.navigationOptions = {
  //headerShown: false,
  headerTransparent: true,
  title: null,
  headerBackTitleVisible: false,
  headerBackImage: () =>
    <TouchableOpacity
      style={{
        width: 400,
        marginLeft: 6,
        marginTop: -14,
        backgroundColor: ''
      }}
    >
      <MaterialIcons
        name="navigate-before"
        size={50}
        color="white"
      />
    </TouchableOpacity>,
};
ForgotScreen.tabBarOptions = {

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
  inputContainer: {
    width: '100%',
    opacity: 1,
  },

  PassText: {
    color: "#ffffff",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "baloo-bhaina-bold",
    marginTop: 140,
  },

  DesPassText: {
    fontSize: 19,
    color: "#3F1F72",
    fontFamily: "baloo-bhaina",
    marginTop: 20,
    marginLeft: 10,
    opacity: 0.7

  },
  ForgotpassBlock: {
    width: 413,
    height: 650,
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: 'rgba(256,256,256,0.75)'
  },
  inputmail: {
    width: 250,
    maxWidth: "100%",
    height: 45,
    marginLeft: 80,
    marginTop: -40,
    paddingLeft: 20,
    fontSize: 16,
    color: "black",
    fontFamily: "baloo-bhaina",
  },
  btnpass: {
    width: 200,
    height: 45,

    marginTop: 24,
    marginLeft: 92,
    backgroundColor: "#FFFF"
  },
  Text: {
    color: "#3F1F72",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "baloo-bhaina-bold",
  },
});

export default ForgotScreen;