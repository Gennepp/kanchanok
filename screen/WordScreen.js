import React from 'react';
import {
    Dimensions,
    ImageBackground, icon,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity, block,
    Keyboard
} from 'react-native';

import {
    Entypo, FontAwesome,
    Ionicons, MaterialIcons
} from '@expo/vector-icons';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';

import bgImage from '../assets/Word.png';


const WordScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            <Block style={styles.block1}>
                <View style={styles.wordBox}><Text style={styles.wordTitle}>ปังปุริ</Text></View>
                <TouchableOpacity style={styles.star}>
                    <FontAwesome name="star" size={30} color={Colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sound}>
                    <FontAwesome name="volume-up" size={30} color={Colors.primary} />
                </TouchableOpacity>
            </Block>

            <View>
                <Block style={styles.block2}>
                    <Text style={styles.Text}>ปังปุริ</Text>
                </Block>
            </View>
        </ImageBackground>
    );
};

WordScreen.navigationOptions = {
    //headerShown: false,
    headerTransparent: true,
    title: 'Word',
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
    block1: {
        flexDirection: 'row',
        width: 360,
        height: 60,
        marginTop: 95,
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.34,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
    },
    wordBox: {
        flex: 6,
        paddingTop: 20,
        paddingLeft: 5,
        width: 260,
        height: 60,
        //backgroundColor: 'black'
    }, 
    wordTitle: {
        color: '#3F1F72',
        fontSize: 18,
        marginLeft: 30,
        fontFamily: 'baloo-bhaina-bold',
    },
    star: {flex: 1,},
    sound: {flex: 1,},
    block2: {
        paddingTop: 30,
        paddingLeft: 30,
        width: 360,
        height: 680,
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 15,
    }, 
    Text: {
        color: '#3F1F72',
        fontSize: 16,
        fontFamily: 'baloo-bhaina',
    },
});

export default WordScreen;
