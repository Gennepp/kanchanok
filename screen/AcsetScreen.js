import React from 'react';
import {
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,Image,
    Keyboard
} from 'react-native';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';

import bgImage from '../assets/Acset.png';
import pfImage from '../assets/1.jpg';
import { block, startClock } from 'react-native-reanimated';

const AcsetScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            <View style={styles.upper}>
                <Text style={styles.Text}>Account</Text>
                <Text style={styles.Text2}>Setting</Text>
            </View>
            <View style={styles.Image}>
                <Image style={{ width: 190, height: 190, borderRadius: 95, marginTop: 100, marginSelf: 'center' }}
                    source={pfImage}>
                </Image>
            </View>
            <TouchableOpacity style={styles.bottomButton} onPress={() => {}}>
                    <Text style={styles.Text3}>change Profile Picture</Text>
                </TouchableOpacity>
                <View style={styles.l}>
                    <Text style={styles.Text4}>Name</Text>
                </View>
                <View style={styles.l}>
                    <Text style={styles.Text4}>Password</Text>
                </View>
                <View style={styles.l}>
                    <Text style={styles.Text4}>Email</Text>
                </View>
                <View style={styles.inputContainer}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <Input
                            style={styles.input}
                            placeholder={'New User Name'}
                            placeholderTextColor={'#552A72'}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={10}
                            flexDirection = 'row'
                        // underlineColorAndroid='transparent'
                        />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <Input
                            style={styles.input}
                            placeholder={'New Password'}
                            placeholderTextColor={'#552A72'}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={10}
                            flexDirection = 'row'
                        // underlineColorAndroid='transparent'
                        />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <Input
                            style={styles.input}
                            placeholder={'New E-mail'}
                            placeholderTextColor={'#552A72'}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={10}
                            flexDirection = 'row'
                        // underlineColorAndroid='transparent'
                        />
                </TouchableWithoutFeedback>
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
    Image: {
        marginTop:-80,
    },
    Input: {
        width:120,
        height:50,
    },
    inputContainer: {
        width:300,
        height:50,
        marginLeft: 120,
        marginHorizontal:50,
        flexDirection:'column',
    },
    Text: {
        color:'#ffff',
        fontSize: 50,
        marginTop: 55,
        marginRight:120,
        fontFamily: 'baloo-bhaina-bold',
    },
    Text2: {
        color:'#ffff',
        fontSize: 50,
        marginTop:-40,
        marginLeft:190,
        fontFamily: 'baloo-bhaina-bold',
    },
    Text3: {
        color:'#ffff',
        fontSize: 20,
        marginTop:35,
        textAlign:'center',
        fontFamily: 'baloo-bhaina-bold',
    },
    Text4: {
        color:'#401F70',
        fontSize: 25,
        marginTop:25,
        marginRight:250,
        fontFamily: 'baloo-bhaina-med',
    },
    block: {
        width: 100,
        height:50,
    },
    bottomText: {
        color: Colors.primary,
        marginVertical: 20
    },
    bottomButton: {
        marginVertical: -20,
    },
    
});

export default AcsetScreen;
