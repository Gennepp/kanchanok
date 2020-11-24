import React from 'react';
import {
    Dimensions,
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button, Title,
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

import bgImage from '../assets/About_Us.png';

const AboutUsScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.screen}>
                <Text style={styles.title}>About Us</Text>
                <Block style={styles.blockAboutUs}>
                    <View style={styles.dataBox}>
                        <Entypo name='facebook-with-circle' size={30} color='#4658fc' style={styles.icon} />
                        <Text style={styles.text}>S1G5</Text>
                    </View>
                    <View style={styles.dataBox}>
                        <Entypo name='mail' size={29} color='#F7EC90' style={styles.icon}/>
                        <Text style={styles.text}>S1G5@hotmail.com</Text>
                    </View>
                    <View style={styles.dataBox}>
                        <FontAwesome name='home' size={30} color='#8B5353' style={styles.icon}/>
                        <Text style={styles.text}>KMITL,Lardkrabang</Text>
                    </View>
                    <View style={styles.dataBox}>
                        <Ionicons name='ios-call' size={35} color='#7BCDCD' style={styles.icon}/>
                        <Text style={styles.text}>012-3456789</Text>
                    </View>
                </Block>
            </View>
        </ImageBackground >
    );
};

AboutUsScreen.navigationOptions = {
    //headerShown: false,
    headerTransparent: true,
    title: null,
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
    title: {
        color: '#ffff',
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'baloo-bhaina-bold',
        marginTop: 120,
    },
    blockAboutUs: {
        marginTop: 80,
        width: 350,
        height: 300,
        justifyContent: 'space-evenly',
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'baloo-bhaina-med',
    },
    dataBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 30,
    }
});

export default AboutUsScreen;
