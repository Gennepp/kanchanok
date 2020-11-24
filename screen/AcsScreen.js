import React from 'react';
import {
    Dimensions,
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity, Image,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Input3 from '../components/Input3';
import Buttons from '../components/Button';

import bgImage from '../assets/Acs.png';
import pfImage from '../assets/Avatar2.jpg';
import { block, startClock } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';

const AcsScreen = (props) => {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <View style={styles.screen}>
                    <View style={styles.titleBox}>
                        <Text style={styles.Title1}>Account</Text>
                        <Text style={styles.Title2}>Setting</Text>
                    </View>

                    <Image style={styles.profilePic} source={pfImage}></Image>

                    <TouchableOpacity style={styles.changePicButton} onPress={() => { }}>
                        <Text style={styles.text}>Change Profile Picture</Text>
                    </TouchableOpacity>

                    <KeyboardAvoidingView
                        behavior='position'
                        contentContainerStyle={styles.screen}
                        keyboardVerticalOffset={0}
                        style={styles.screen}
                    >
                        <View style={styles.inputContainer}>
                            <Input3
                                style={styles.input}
                                id="username"
                                label="Username"
                                keyboardType="email-address"
                                errorText="please enter a valid input!"
                                placeholder={'New Username'}
                                placeholderTextColor={Colors.primary}
                                autoCorrect={false}
                                autoCapitalize='none'
                                maxLength={15}
                                returnKeyType='next'
                                //onInputChange={inputChangeHandler}
                                initialValue=""
                            />
                            <Input3
                                style={styles.input}
                                id="email"
                                label="E-mail"
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
                            <Input3
                                style={styles.input}
                                id="password"
                                label="Password"
                                keyboardType="default"
                                secureTextEntry
                                errorText="please enter a valid password!"
                                placeholder={'New Password'}
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

                        <Buttons style={styles.logoutButton}>
                            <Text style={styles.logout}>Log out</Text>
                        </Buttons>

                    </KeyboardAvoidingView>

                </View>
            </TouchableWithoutFeedback>
        </ImageBackground >
    );
};

AcsScreen.navigationOptions = {
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
    titleBox: {
        marginTop: 5,
    },
    Title1: {
        color: '#ffff',
        fontSize: 50,
        marginTop: 55,
        marginRight: 120,
        fontFamily: 'baloo-bhaina-bold',
    },
    Title2: {
        color: '#ffff',
        fontSize: 50,
        marginTop: -40,
        marginLeft: 190,
        fontFamily: 'baloo-bhaina-bold',
    },
    profilePic: {
        width: 190,
        height: 190,
        borderRadius: 95,
        marginTop: 10,
        alignSelf: 'center'
    },
    changePicButton: {

    },
    text: {
        color: '#ffff',
        fontSize: 20,
        marginTop: 30,
        textAlign: 'center',
        fontFamily: 'baloo-bhaina-bold',
        // textDecorationLine: 'underline'
    },
    inputContainer: {
        width: 280,
        marginTop: 5,
        alignItems: 'center',
    },
    input: {
        width: 260,
        height: 40,
        paddingLeft: 30,
        fontSize: 16,
        fontFamily: 'baloo-bhaina',
        color: 'black',
        marginTop: -10,
    },
    logoutButton: {
        marginTop: 10,
        width: 105,
        height: 45,
        justifyContent: 'center',
        backgroundColor: '#5E2689',
    },
    logout: {
        color: '#ffff',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'baloo-bhaina-bold',
    },
});

export default AcsScreen;
