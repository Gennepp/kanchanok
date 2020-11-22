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


import bgImage from "../assets/Favorite.png";
import Block from "../components/Blocknoshadow";

const FavScreen = (props) => {
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
                    

          <Text style={styles.FavText}> Favorite </Text>

          <View style={styles.bottom}>
                        <TouchableOpacity
                            style={styles.btnEdit}
                            onPress={() => {  }}
                        >
                            <Text style={styles.EditText}>Edit</Text>
                        </TouchableOpacity>
                    </View>

          <Block style={styles.FavBlock}>

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
  

  FavText: {
    color: "#ffffff",
    fontSize: 50,
    textAlign: "center",
    fontFamily: "baloo-bhaina",
    marginTop: 80,
    marginLeft: -180,
  },
  btnEdit: {
    marginTop: -68,
    marginLeft: 280,
  },

  EditText: {
    fontSize: 22,
    color: "white",
    fontFamily: "baloo-bhaina",
    // marginTop: -68,
    // marginLeft: 280,
    textDecorationLine: 'underline',
    
   

  },
  bottom: {
    marginTop: -5,
    flexDirection: 'row',
   
},
  FavBlock: {
    marginTop: 0,
    borderRadius: 15,
    backgroundColor: 'rgba(256,256,256,0.8)'
  },
 
});

export default FavScreen;