import React, { useReducer, useCallback } from 'react';
import {
    ImageBackground,
    ScrollView,
    KeyboardAvoidingView,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    Platform,
    Dimensions
} from 'react-native';
import { useDispatch } from 'react-redux';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';
import * as authActions from '../actions/auth';

import bgImage from '../assets/Login.png';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const LoginPfScreen = (props) => {
    // const dispatch = useDispatch();

    // const [formState, dispatchFormState] = useReducer(formReducer, {
    //     inputValues: {
    //         email: '',
    //         password: ''
    //     },
    //     inputValidities: {
    //         email: false,
    //         password: false
    //     },
    //     formIsValid: false
    // });

    // const signupHandler = () => {
    //     dispatch(
    //         authActions.signup(
    //             formState.inputValues.email,
    //             formState.inputValues.password
    //         )
    //     );
    // };

    // const inputChangeHandler = useCallback(
    //     (inputIdentifier, inputValue, inputValidity) => {
    //         dispatchFormState({
    //             type: FORM_INPUT_UPDATE,
    //             value: inputValue,
    //             isValid: inputValidity,
    //             input: inputIdentifier
    //         });
    //     },
    //     [dispatchFormState]
    // );

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <KeyboardAvoidingView
                    behavior='position'
                    contentContainerStyle={styles.screen}
                    keyboardVerticalOffset={20}
                    style={styles.screen}
                >
                    <Block style={styles.container}>
                        <Text style={styles.title}>EXPLORE NEW WORDS</Text>
                        <Text style={styles.subTitle}>Teach and Learn everyday</Text>

                        <View style={styles.formContainer}>
                            <View>
                                <Feather name="user" size={35} style={styles.icon} />
                                <MaterialIcons name="lock-outline" size={35} style={styles.icon2} />
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

                        <Buttons style={styles.buttonLogin} onPress={() => { }}>
                            <Text style={styles.login}>LOGIN</Text>
                        </Buttons>

                        <TouchableOpacity
                            style={styles.buttonForget}
                            onPress={() => { props.navigation.navigate('Forgot'); }}
                        >
                            <Text style={styles.forgot}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <View style={styles.bottom}>
                            <Text style={styles.text2}>Not a member yet?</Text>
                            <TouchableOpacity
                                style={styles.buttonSignup}
                                onPress={() => { props.navigation.navigate('SignUp'); }}
                            >
                                <Text style={styles.signup}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </Block>

                    {/* <View style={styles.bottomButton}>
                        <Button title='Sign Up' onPress={() => {
                            props.navigation.navigate('SignUp');
                        }} color={Colors.primary} />
                        <Button title='Forget password?' onPress={() => { }} color={Colors.primary} />
                    </View> */}

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback >
        </ImageBackground >
    );
};

LoginPfScreen.navigationOptions = {
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
    headerRight: () => (
        <TouchableOpacity
            style={{ marginRight: 20, marginTop: -15, backgroundColor: '' }}
            onPress={() => alert('This is a button!')}
        >
            <FontAwesome name="close" size={30} color="white" />
        </TouchableOpacity>
    ),
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
    container: {
        width: 380,
        height: 425,
        marginTop: '108%',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    title: {
        fontSize: 34,
        fontFamily: 'baloo-bhaina-bold',
        marginTop: 3,
        //marginVertical: 20,
        //fontWeight: 'bold',
        color: Colors.primary,
    },
    subTitle: {
        fontSize: 20,
        fontFamily: 'baloo-bhaina',
        color: Colors.primary,
        marginTop: -10,
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
    formContainer: {
        marginTop: '4%',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    icon: {
        width: 30,
        marginTop: 4,
        color: Colors.primary
    },
    icon2: {
        width: 30,
        marginTop: 47,
        color: Colors.primary
    },
    buttonLogin: {
        width: 105,
        height: 45,
        justifyContent: 'center',
        backgroundColor: Colors.button,
    },
    login: {
        paddingTop: 5,
        color: 'white',
        fontSize: 20,
        fontFamily: 'baloo-bhaina-bold',
        textAlign: 'center'
    },
    buttonForget: {
        marginTop: 10,
    },
    buttonSignup: {
        paddingLeft: 8,
        marginTop: -6.6,
    },
    forgot: {
        marginTop: 5,
        color: Colors.primary,
        fontSize: 16,
        fontFamily: 'baloo-bhaina',
        textDecorationLine: 'underline'
    },
    signup: {
        color: Colors.primary,
        fontSize: 20,
        //fontWeight: 'bold',
        fontFamily: 'baloo-bhaina-bold',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    text2: {
        //padding: 5,
        color: Colors.primary,
        fontSize: 16,
        fontFamily: 'baloo-bhaina',
    },
    bottom: {
        marginTop: -5,
        flexDirection: 'row',
        paddingRight: 10,
    }
});

export default LoginPfScreen;
