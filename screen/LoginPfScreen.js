import React from 'react';
import {
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard
} from 'react-native';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';

import bgImage from '../assets/Login.png';

const LoginPfScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <View style={styles.screen}>
                    <Text style={styles.title}>EXPLORE NEW WORDS</Text>
                    <Text style={styles.subTitle}>You can TEACH , You can LEARN</Text>
                    
                    <View>
                        {/* <FontAwesome name="user" size={40} color='(rgba(63, 31, 114, 1)' /> */}
                        <Input
                            style={styles.input}
                            placeholder={'Username'}
                            placeholderTextColor={Colors.primary}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={10}
                            flexDirection = 'row'
                        // underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Input
                            style={styles.input}
                            placeholder={'Password'}
                            placeholderTextColor={Colors.primary}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={10}
                        // underlineColorAndroid='transparent'
                        />
                    </View>

                    
                    <Buttons style={styles.buttonLogin}>
                        <Text style={styles.Text}>Log In</Text>
                    </Buttons>

                    <Text style={styles.bottomText}>Not a member yet?</Text>

                    <View style={styles.bottomButton}>
                        <Button title='Sign Up' onPress={() => { 
                            props.navigation.navigate('SignUp');
                         }} color={Colors.primary} />
                        <Button title='Forget password?' onPress={() => { }} color={Colors.primary} />
                    </View>

                </View>
            </TouchableWithoutFeedback >
            
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        height: null,
        width: null,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        marginTop: '80%',
        //marginVertical: 20,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    subTitle: {
        color: 'red',
        marginVertical: 10,
    },
    input: {
        width: 250,
        maxWidth: '80%',
        height: 45,
        // alignItems: 'baseline',
        //marginTop: 25,
        marginTop: 20,
        paddingLeft: 45,
        fontSize: 16,
        color: 'black',
    },
    inputContainer: {
        marginTop: -10
    },
    // buttonContainer: {
    //     // flexDirection: 'row',
    //     width: '100%',
    //     // justifyContent:'space-between',
    //     padding: 30,
    //     paddingHorizontal: 15,
    // },
    buttonLogin: {
        width: 105,
        height: 45,
    },
    Text: {
        color: Colors.primary,
        fontSize: 16,
        textAlign: 'center'
    },
    bottomText: {
        color: Colors.primary,
        marginVertical: 20
    },
    bottomButton: {
        marginVertical: -20,
    },
    
});

export default LoginPfScreen;
