import React from 'react';
import {
    ImageBackground, Image, onPress,
    View, Text,icon,
    StyleSheet, Button,TouchableOpacity,
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

import bgImage from '../assets/Profilefinal.png';
import pfImage from '../assets/1.jpg';
import { TextInput } from 'react-native-gesture-handler';

const ProfileScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            <View>
                <Image style={{ width: 150, height: 150, borderRadius: 75, marginTop: 100, marginSelf: 'center' }}
                    source={pfImage}>
                </Image>
            </View>
            <View>
                <Block style={styles.blockname}>
                    <TextInput style={styles.TextInput}>Nongnoii</TextInput>
                </Block>
            </View>
            <View>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <Buttons style={styles.buttonAs}>
                    <Text style={styles.Text2}>Account setting</Text>
                </Buttons>
            </TouchableWithoutFeedback >
            </View>

            <Block style={styles.block1}>
            <View style={styles.icon}>
                <Foundation name="lightbulb" size={40} color='#FFE600'/>
                <Text>   </Text>
                <FontAwesome name="users" size={40} color='#56BC6D' />
                <Text>   </Text>
                <MaterialIcons name="error" size={40} color='#4F78E3' />
            </View>
            <View>
                <TouchableOpacity style={styles.bottomButton} onPress={() => {
                        props.navigation.navigate('TeachScreen');
                    }}>
                    <Text style={styles.Text1}>Teach Me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} onPress={() => {
                    props.navigation.navigate('About_usScreen');
                }}>
                    <Text style={styles.Text1}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} onPress={() => {}}>
                    <Text style={styles.Text1}>Version 1.0.0</Text>
                </TouchableOpacity>
            </View>
            </Block> 
            <View>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <Buttons style={styles.buttonlogout}>
                    <Text style={styles.Text3}>Log out</Text>
                </Buttons>
            </TouchableWithoutFeedback >
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
    blockname: {
        width: 270,
        height: 60,
        marginTop: 20,
        alignItems: 'center',
    },
    block1: {
        width: 300,
        height: 200,
        marginTop: 20,
        flexDirection: 'row',
    },
    TextInput: {
        color: '(rgba(63, 31, 114, 1)',
        fontSize: 29,
        fontFamily: 'baloo-bhaina-bold',
    },
    Text1: {
        color: '(rgba(63, 31, 114, 1)',
        fontSize: 25,
        fontFamily: 'baloo-bhaina-bold',
        marginTop:-1,
        marginLeft:5,
    },
    Text2: {
        color: '(rgba(63, 31, 114, 1)',
        fontSize: 20,
        fontFamily: 'baloo-bhaina',
        alignSelf: 'center',
    },
    Text3: {
        color: "white",
        fontSize: 20,
        fontFamily: 'baloo-bhaina-bold',
        alignSelf: 'center',
    },
    buttonAs: {
        width: 180,
        height: 50,
        alignItems: 'center',
    },
    buttonlogout: {
        backgroundColor:'#793C73',
        width: 150,
        height: 50,
        alignItems: 'center',
    },
    bottomButton: {
        marginTop:1,
        marginVertical: 10,
        marginLeft:10,
    },
    icon: {
        marginTop:5,
        marginVertical: 25,
    },
});

export default ProfileScreen;
