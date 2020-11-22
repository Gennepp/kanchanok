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
} from 'react-native';
import { useDispatch } from 'react-redux';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';
import * as authActions from '../actions/auth';

import bgImage from '../assets/Login.png';
import { FontAwesome5, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

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

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });

    const signupHandler = () => {
        dispatch(
            authActions.signup(
                formState.inputValues.email,
                formState.inputValues.password
            )
        );
    };

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <KeyboardAvoidingView
                    behavior='position'
                    contentContainerStyle={styles.screen}
                    keyboardVerticalOffset={20}
                    style={styles.screen}
                >
                    <Text style={styles.title}>EXPLORE NEW WORDS</Text>
                    <Text style={styles.subTitle}>Teach and Learn everyday</Text>
                    <View style={styles.formContainer}>
                        <View>
                            <Feather name="user" size={35} color="black" style={styles.icon} />
                            <MaterialIcons name="lock-outline" size={35} color="black"  style={styles.icon2} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                style={styles.input}
                                id="username"
                                label="Username"
                                keyboardType="email-address"
                                errorText="please enter a valid input!"
                                placeholder={'Username'}
                                placeholderTextColor={Colors.primary}
                                autoCorrect={false}
                                autoCapitalize='none'
                                maxLength={15}
                                returnKeyType='next'
                                onInputChange={inputChangeHandler}
                                initialValue=""
                            />
                            <Input
                                style={styles.input}
                                id="password"
                                label="Password"
                                keyboardType="default"
                                secureTextEntry
                                errorText="please enter a valid password!"
                                placeholder={'Username'}
                                placeholderTextColor={Colors.primary}
                                autoCorrect={false}
                                autoCapitalize='none'
                                minLength={5}
                                maxLength={15}
                                returnKeyType='next'
                                onInputChange={inputChangeHandler}
                                initialValue=""
                            />
                        </View>
                    </View>

                    <Buttons style={styles.buttonLogin} onPress={signupHandler}>
                        <Text style={styles.text}>LOGIN</Text>
                    </Buttons>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
                        <Text style={styles.text}>Signup</Text>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Button title='Forget' onPress={signupHandler} />
                    </View>

                    <Text style={styles.bottomText}>Not a member yet?</Text>

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
    headerShown: false,
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        height: null,
        width: null,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
    },
    title: {
        fontSize: 34,
        marginTop: '100%',
        //marginVertical: 20,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    subTitle: {
        fontSize: 20,
        color: Colors.primary,
        marginVertical: 10,
    },
    input: {
        width: 260,
        height: 45,
        paddingLeft: 30,
        fontSize: 16,
        color: 'black',
    },
    inputContainer: {
        marginLeft: 10,
        width: 280,
        alignItems: 'center',
    },
    formContainer: {
        marginTop: '5%',
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
    buttonContainer: {
        marginTop: 10,
    },
    buttonLogin: {
        width: 105,
        height: 45,
        marginTop: 15,
    },
    text: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bottomText: {
        color: Colors.primary,
        marginVertical: 20
    },
});

export default LoginPfScreen;
