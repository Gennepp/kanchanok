import React from 'react';
import {
    ImageBackground,icon,
    View, Text, TextInput,
    StyleSheet, Button,
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

import bgImage from '../assets/meaning.png';


const Meaning = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            
                <View style={styles.icon1}>
                    <MaterialIcons name="navigate-before" size={50} color="white"/>
                </View>
                <View>
                    <Block style={styles.block1}>
                        <Text style={styles.Text}>ปังปุริ</Text>
                    </Block>
                </View>
                <View style={styles.icon2}>
                    <FontAwesome name="star" size={40} color='#3F1F72'/>
                </View>
                <View style={styles.icon3}>
                    <FontAwesome name="volume-up" size={40} color='#3F1F72'/>
                </View>
                <View>
                    <Block style={styles.block2}>
                        <Text style={styles.Text}>ปังปุริ</Text>
                    </Block>
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
    // buttonContainer: {
    //     // flexDirection: 'row',
    //     width: '100%',
    //     // justifyContent:'space-between',
    //     padding: 30,
    //     paddingHorizontal: 15,
    // },
    block1: {
        width: 350,
        height: 70,
        marginTop: 10,
        flexDirection: 'row',
        opacity:0.85,
    },
    block2: {
        width: 350,
        height: 550,
        marginTop: 50,
        flexDirection: 'row',
        opacity:0.85,
    },
    Text: {
        color: '#3F1F72',
        fontSize: 15,
        marginLeft:30,
        fontFamily:'baloo-bhaina',
    },
    icon1: {
        marginTop: 40,
        marginRight: 350,
        flexDirection: 'row',
    },
    icon2: {
        marginLeft: 150 ,
        marginTop: -55,
        flexDirection: 'row',
    },
    icon3: {
        marginLeft: 270 ,
        marginTop: -40,
        flexDirection: 'row',
    },
});

export default Meaning;
