import React from 'react';
import {
    ImageBackground, Image, onPress,
    View, Text,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    block, Keyboard, event
} from 'react-native';


import {
    FontAwesome5, Foundation,
    MaterialIcons
} from '@expo/vector-icons';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';

import bgImage from '../assets/Profile.png';
import pfImage from '../assets/1.jpg';

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
                    <Text style={styles.Text1}>Nongnoii</Text>
                </Block>
            </View>

            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <Buttons style={styles.buttonAs}>
                    <Text style={styles.Text2}>Accout setting</Text>
                </Buttons>
            </TouchableWithoutFeedback>
            <Block style={styles.block1}>
                <View style={styles.bottomButton}>
                    <Button title='Teach Me' onPress={() => {
                            props.navigation.navigate('TeachScreen');
                        }} color={Colors.primary} />
                    <Button title='About Us' onPress={() => {
                        props.navigation.navigate('About_usScreen');
                    }} color={Colors.primary} />
                    <Text style={styles.Text1}><MaterialIcons name="error" size={30} color='#4F78E3' /> Version 1.0.0</Text>
                </View>
            </Block>
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
        height: 50,
        marginTop: 20,
        alignItems: 'center',
    },
    block1: {
        width: 300,
        height: 200,
        marginTop: 20,
    },
    Text1: {
        color: '(rgba(63, 31, 114, 1)',
        fontSize: 15,
        fontFamily: 'baloo-bhaina-bold',
    },
    Text2: {
        color: '(rgba(63, 31, 114, 1)',
        fontSize: 20,
        fontFamily: 'baloo-bhaina',
        alignSelf: 'center',
    },
    buttonAs: {
        width: 180,
        height: 40,
        alignItems: 'center',
    },
    bottomButton: {
        marginVertical: 10,
        marginRight: 120,
    }
});

export default ProfileScreen;
