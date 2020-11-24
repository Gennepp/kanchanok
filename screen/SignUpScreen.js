import React from "react";
import {
    Dimensions,
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
    FontAwesome5,
    MaterialIcons,
    Feather,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import Input from "../components/Input";
import Buttons from "../components/Button";
import Colors from "../constants/color";
import bgImage from "../assets/Sign_up.png";
import Block from "../components/Block";

const SignUpScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <View style={styles.screen}>
                    
                    <KeyboardAvoidingView
                        behavior='position'
                        contentContainerStyle={styles.screen}
                        keyboardVerticalOffset={-190}
                        style={styles.screen}
                    >
                        <Text style={styles.title}> SIGN UP </Text>
                        <Block style={styles.SignupBlock}>
                            <View style={styles.formContainer}>
                                <View style={styles.iconContainer}>
                                    <Feather name="user" size={35} style={styles.icon} />
                                    <MaterialCommunityIcons name="email-outline" size={30} style={styles.icon} />
                                    <MaterialIcons name="lock-outline" size={35} style={styles.icon} />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Input
                                        style={styles.input}
                                        id="username"
                                        keyboardType="email-address"
                                        errorText="please enter a valid input!"
                                        placeholder={'Username'}
                                        placeholderTextColor={Colors.primary}
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        maxLength={15}
                                        returnKeyType='next'
                                        //onInputChange={inputChangeHandler}
                                        initialValue=""
                                    />
                                    <Input
                                        style={styles.input}
                                        id="email"
                                        keyboardType="email-address"
                                        errorText="please enter a valid input!"
                                        placeholder={'New E-Mail'}
                                        placeholderTextColor={Colors.primary}
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        maxLength={15}
                                        returnKeyType='next'
                                        //onInputChange={inputChangeHandler}
                                        initialValue=""
                                    />
                                    <Input
                                        style={styles.input}
                                        id="password"
                                        keyboardType="default"
                                        secureTextEntry
                                        errorText="please enter a valid password!"
                                        placeholder={'Password'}
                                        placeholderTextColor={Colors.primary}
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        minLength={5}
                                        maxLength={15}
                                        returnKeyType='next'
                                        //onInputChange={inputChangeHandler}
                                        initialValue=""
                                    />
                                </View>
                            </View>

                            <Buttons style={styles.btnCreate}>
                                <Text style={styles.create}>CREATE ACCOUNT</Text>
                            </Buttons>

                        </Block>
                    </KeyboardAvoidingView>
                    <View style={styles.bottom}>
                        <Text style={styles.text}>Already have an account?</Text>
                        <TouchableOpacity style={styles.btnLogin} onPress={() => {
                            props.navigation.navigate('LoginPfScreen');
                        }}>
                            <Text style={styles.login}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </ImageBackground >
    );
};

SignUpScreen.navigationOptions = {
    //headerShown: false,
    headerTransparent: true,
    title: null,
    headerTitleStyle: {
        marginTop: -14,
        color: 'white',
        fontSize: 18,
    },
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

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
    },
    title: {
        color: "#ffffff",
        fontSize: 40,
        textAlign: "center",
        fontFamily: "baloo-bhaina-bold",
        marginTop: 140,
    },
    SignupBlock: {
        width: 413,
        height: 650,
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'rgba(256,256,256,0.75)'
    },
    formContainer: {
        marginTop: '15%',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    input: {
        width: 260,
        height: 45,
        paddingLeft: 30,
        fontSize: 16,
        fontFamily: 'baloo-bhaina',
        color: 'black',
    },
    inputContainer: {
        marginLeft: 10,
        width: 280,
        alignItems: 'center',
    },
    iconContainer: {
        marginTop: -19,
        height: 250,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    icon: { color: Colors.primary },
    btnCreate: {
        width: 220,
        height: 45,
        marginTop: 10,
        backgroundColor: "#5E2689"
    },
    create: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontFamily: "baloo-bhaina-bold",
    },
    btnLogin: {
        marginTop: -6,
        marginLeft: 6,
    },
    login: {
        fontSize: 20,
        color: "#3F1F72",
        fontFamily: "baloo-bhaina-bold",
        textDecorationLine: 'underline',
    },
    text: {
        fontSize: 16,
        color: "#3F1F72",
        fontFamily: "baloo-bhaina",
    },
    bottom: {
        marginTop: '167%',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default SignUpScreen;
