import React from 'react';
import {
    ImageBackground, Image, onPress,
    View, Text,
    StyleSheet, Button,
    TouchableOpacity,
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
import pfImage from '../assets/Avatar.png';

const ProfileScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            <View>
                <Image style={{ width: 150, height: 150, borderRadius: 75, marginTop: 100, alignSelf: 'center' }}
                    source={pfImage}>
                </Image>
            </View>
            <View>
                <Block style={styles.blockname}>
                    <Text style={styles.Text3}>Nongnoii</Text>
                </Block>
            </View>

            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <Buttons style={styles.buttonAs}>
                    <Text style={styles.Text2}>Accout setting</Text>
                </Buttons>
            </TouchableWithoutFeedback>
            <Block style={styles.block1}>
                <TouchableOpacity style={styles.bottomButton} onPress={() => {
                        props.navigation.navigate('TeachScreen');
                    }}>
                    <Text style={styles.Text3}>Teach Me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} onPress={() => {
                    props.navigation.navigate('About_usScreen');
                }}>
                    <Text style={styles.Text3}>About Us</Text>
                </TouchableOpacity>
                <Text style={styles.Text1}><MaterialIcons name="error" size={30} color='#4F78E3' /> Version 1.0.0</Text>
                {/* <TouchableOpacity style={styles.bottomButton}>
                    <Touch title='Teach Me' onPress={() => {
                        props.navigation.navigate('TeachScreen');
                    }} color={Colors.primary} />
                <Button title='About Us' onPress={() => {
                    props.navigation.navigate('About_usScreen');
                }} color={Colors.primary} />
                <Text style={styles.Text1}><MaterialIcons name="error" size={30} color='#4F78E3' /> Version 1.0.0</Text>
                </TouchableOpacity> */}
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
        height: 30,
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
    Text3: {
        marginTop:-18,
        color: Colors.primary,
        fontSize: 20,
        fontFamily: 'baloo-bhaina-bold',
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
