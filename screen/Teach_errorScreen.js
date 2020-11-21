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

import bgImage from '../assets/Teach_error.png';

const Teach_errorScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
           <Buttons style={styles.buttonWhoops}>
                        <Text style={styles.Text}>Whoops!</Text>
                        <Text style={styles.Text}>Something went wrong </Text>
                        <Text style={styles.Text}>please try again</Text>
                    </Buttons> 
        </ImageBackground >
    );
};
const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: '#FFF',
    },
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    buttonWhoops: {
        width: 300,
        height: 200,
        alignItems: "center",
    },
});

export default Teach_errorScreen;
