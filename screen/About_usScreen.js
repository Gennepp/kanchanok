import React from 'react';
import {
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import{Entypo } from'@expo/vector-icons';
import{FontAwesome}from'@expo/vector-icons';
import{Ionicons}from'@expo/vector-icons';
import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';

import bgImage from '../assets/About_us.png';

const About_usScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>   
                
               
                <View>
                < Entypo
                 raised
                 name='facebook-with-circle' 
                 size={30} 
                 color= '#4658fc'
                 styles={{marginTop:60}}/>
                 < Entypo
                 raised
                 name='mail' 
                 size={30} 
                 color= '#F7EC90'/>
                 < FontAwesome
                 raised
                 name='home' 
                 size={30} 
                 color= '#8B5353'/>
                 < Ionicons
                 raised
                 name='ios-call' 
                 size={30} 
                 color= '#7BCDCD'/>

                    <Buttons style={styles.buttonAbout_us}>
                        <Text style={styles.Text}>S1G5</Text>
                        <Text style={styles.Text}>S1G5@hotmail.com</Text>
                        <Text style={styles.Text}>KMITL,Lardkrabang</Text>
                        <Text style={styles.Text}>012-3456789</Text>
                    </Buttons>
                    
                    </View>
                   
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
    // buttonContainer: {
    //     // flexDirection: 'row',
    //     width: '100%',
    //     // justifyContent:'space-between',
    //     padding: 30,
    //     paddingHorizontal: 15,
    // },
    buttonAbout_us: {
        width: 300,
        height: 200,
        marginTop: 200,
    },
    Text: {
        color: 'black',
        fontSize: 26,
        textAlign: 'left',
        fontFamily:'baloo-bhaina'
    },
    
});

export default About_usScreen;
