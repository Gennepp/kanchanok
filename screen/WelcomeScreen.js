import React from 'react';
import {
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,Title,
    TouchableWithoutFeedback,
    TouchableOpacity,block,
    Keyboard
} from 'react-native';

import{
    Entypo,FontAwesome,
    Ionicons,MaterialIcons
}from'@expo/vector-icons';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';

import bgImage from '../assets/WelcomeScreen.png';

const WelcomeScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            <View>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <Buttons style={styles.buttonSign_up}>
                    <Text style={styles.Text}>Sign Up</Text>
                </Buttons>
            </TouchableWithoutFeedback >
            </View> 
            <Text> </Text>
        <View style={styles.Button}>
            <View style={styles.Text2}>
                    <Text style={styles.Text2}>Already have an account?</Text>
            </View>  
            <View>
            <TouchableOpacity style={styles.bottomButton} onPress={() => {
                    props.navigation.navigate('LoginScreen');
                }}>
                    <Text style={styles.Text3}>Log In</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    backgroundContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    Button:{
        flexDirection:'row',
        alignItems:'center',
    },
    buttonSign_up: {
        width: 125,
        height: 50,
        backgroundColor:'#5E2689',
        alignItems:'center',
        marginTop:770,
    },
    Text: {
        color: 'white',
        fontSize: 20,
        fontFamily:'baloo-bhaina-bold',
        textAlign:'center',

    },
    Text2: {
        color: '#3F1F72',
        fontSize: 20,
        fontFamily:'baloo-bhaina',
    },
    Text3: {
        color: '#3F1F72',
        fontSize: 22,
        fontFamily:'baloo-bhaina-bold',
        textDecorationLine: 'underline',
        },
    
});

export default WelcomeScreen;
