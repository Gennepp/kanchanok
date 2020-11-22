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
// import { MaterialIcons} from '@expo/vector-icons'

import {
  FontAwesome5,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Input from "../components/Input";
import Buttons from "../components/Button";
import Colors from "../constants/color";
import bgImage from "../assets/ForgotPass.png";
import Block from "../components/Block";

const SignUpScreen = (props) => {
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

          <Text style={styles.SuText}> SIGN UP </Text>

          <Block style={styles.SignupBlock}>
            <View style={styles.inputContainer}>
              <Feather
                name="user"
                size={30}
                color="#3F1F72"
                style={{ marginTop: 90, marginLeft: 20 }}
              />
              <Input
                style={styles.input}
                placeholder={"Username"}
                placeholderTextColor={Colors.primary}
                autoCorrect={false}
                autoCapitalize="none"
                maxLength={10}
              />
            </View>

            <View>
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

            <View>
              <MaterialIcons
                name="lock-outline"
                size={34}
                color="#3F1F72"
                style={{ marginTop: 40, marginLeft: 20 }}
              />
              <Input
                style={styles.inputpass}
                placeholder={"Password"}
                placeholderTextColor={Colors.primary}
                autoCorrect={false}
                autoCapitalize="none"
                maxLength={10}
                // underlineColorAndroid='transparent'
              />
            </View>

            <MaterialIcons
              name="navigate-before"
              size={60}
              color="white"
              
             style={{ marginTop: -555, marginLeft: -18 }}
            />

            <Buttons style={styles.btnmail}>
              <Text style={styles.Text}>CREATE ACCOUNT</Text>
            </Buttons>
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
    // width: 410,
    // height: 100,
    // maxWidth: '100%',
    // marginTop: 0,
    // backgroundColor: "white",
    // padding: 20,
    // borderRadius: 20,
    // opacity : 0.5
  },
  inputContainer: {
    width: '100%',
    opacity: 1,
  },
  input: {
    width: 250,
    maxWidth: "100%",
    height: 45,
    // alignItems: 'baseline',
    //marginTop: 25,
    marginLeft: 80,
    marginTop: -38,
    paddingLeft: 20,
    fontSize: 16,
    color: "black",
    fontFamily: "baloo-bhaina",
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

  inputpass: {
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

  btnmail: {
    width: 200,
    height: 45,
    
    marginTop: 560,
    marginLeft: 92,
    backgroundColor: "#5E2689"
  },
  Text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "baloo-bhaina-bold",
  },
  SuText: {
    color: "#ffffff",
    fontSize: 45,
    textAlign: "center",
    fontFamily: "baloo-bhaina-bold",
    marginTop: 140,
  },
  SignupBlock: {
    width: 413,
    height: 650,
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: 'rgba(256,256,256,0.75)'
  },
});

export default SignUpScreen;
