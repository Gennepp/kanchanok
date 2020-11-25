import React from 'react';
import {
    Dimensions,
    ImageBackground, Image, onPress,
    View, Text, icon,
    StyleSheet, Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
    block, Keyboard, event
} from 'react-native';


import {
    FontAwesome, Foundation,
    MaterialIcons
} from '@expo/vector-icons';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';

import bgImage from '../assets/Profile.png';
import pfImage from '../assets/Avatar2.jpg';
import { TextInput } from 'react-native-gesture-handler';

const ProfileScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.screen}>

                <Image style={styles.profilePic}
                    source={pfImage}>
                </Image>

                <Block style={styles.nameBox}>
                    <Text style={styles.name}>Nongnoii</Text>
                </Block>

                <Buttons style={styles.acsButton} onPress={() => {
                    props.navigation.navigate('Acs');
                }}
                >
                    <Text style={styles.buttonTitle}>Account setting</Text>
                </Buttons>

                <Block style={styles.block}>
                    <TouchableOpacity style={styles.optionContainer} onPress={() => {
                        props.navigation.navigate('Teach');
                    }}>
                        <Foundation name="lightbulb" size={33} color='#FFD600' />
                        <Text style={styles.option}>Teach Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer} onPress={() => {
                        props.navigation.navigate('AboutUs');
                    }}>
                        <FontAwesome name="users" size={26} color='#56BC6D' />
                        <Text style={styles.option}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer} onPress={() => {
                        props.navigation.navigate('Myword');
                    }}>
                        <MaterialIcons name="error" size={28} color='#4F78E3' />
                        <Text style={styles.option}>Version 1.0.0</Text>
                    </TouchableOpacity>
                </Block>
                <Buttons style={styles.btnLogout} onPress={() => { Keyboard.dismiss(); }}>
                    <Text style={styles.logout}>Log out</Text>
                </Buttons >

                <Buttons style={styles.buttonLogin} onPress={() => { props.navigation.navigate('Login'); }}>
                    <Text style={styles.login}>LOGIN</Text>
                </Buttons>
            </View>
        </ImageBackground >
    );
};

ProfileScreen.navigationOptions = {
    headerTransparent: true,
    title: null,
    headerBackTitleVisible: false,
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
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 80,
        alignSelf: 'center'
    },
    nameBox: {
        width: 270,
        height: 50,
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '(rgba(255, 255, 255, 1)',
    },
    name: {
        color: '(rgba(63, 31, 114, 1)',
        fontSize: 29,
        fontFamily: 'baloo-bhaina-bold',
    },
    acsButton: {
        width: 190,
        height: 50,
        marginTop: 30,
        alignItems: 'center',
    },
    buttonTitle: {
        color: Colors.primary,
        fontSize: 20,
        fontFamily: 'baloo-bhaina-bold',
        alignSelf: 'center',
    },
    block: {
        width: 300,
        height: 200,
        marginTop: 30,
        backgroundColor: 'rgba(255,255,255,1)',
    },
    optionContainer: {
        marginVertical: 3.3,
        paddingLeft: 15,
        width: 300,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    option: {
        color: '(rgba(63, 31, 114, 1)',
        fontSize: 25,
        fontFamily: 'baloo-bhaina-bold',
        marginTop: 5,
        marginLeft: 20,
    },
    btnLogout: {
        marginTop: 40,
        width: 115,
        height: 45,
        backgroundColor: '#683474',
        justifyContent: 'center',
    },
    logout: {
        color: "white",
        fontSize: 20,
        fontFamily: 'baloo-bhaina-bold',
        textAlign: 'center',
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
});

export default ProfileScreen;
