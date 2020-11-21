import React from 'react';
import {
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard
} from 'react-native';

import Input from '../components/Input';
import Input2 from '../components/Input2';
import Buttons from '../components/Button';
import Colors from '../constants/color';
import bgImage from '../assets/Teachbg.png';
const TeachScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}> 
                <View style={styles.screen}>
                    {/* <Text style={styles.title}>You TEACH</Text>
                    <Text style={styles.subTitle}>I LEARN</Text> */}

                    <View>
                        <Input
                            style={styles.input}
                            placeholder={'Type something...'}
                            placeholderTextColor={Colors.primary}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={100}
                        // underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.meaning}>
                        <Input2
                            style={styles.input2}
                            placeholder={'Meaning...'}
                            placeholderTextColor={Colors.primary}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={100}
                            
                        // underlineColorAndroid='transparent'
                        />
                    </View>

                    <Buttons style={styles.btnTeach}>
                        <Text style={styles.Text}>Teach me</Text>
                    </Buttons>


                </View>
            </TouchableWithoutFeedback >
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
    // title: {
    //     fontSize: 40,
    //     marginTop: '100%',
    //     //marginVertical: 20,
    //     color: '#F5FCFF',
    //     fontFamily:'baloo-bhaina-bold'
    // },
    // subTitle: {
    //     fontSize: 40,
    //     color: '#F5FCFF',
    //     marginVertical: -8,
    //     fontFamily:'baloo-bhaina-bold'
    // },
    input: {
        
        width: 232,
        maxWidth: '80%',
        height: 138,
        marginLeft: 50 ,
        marginTop: 380,
        paddingLeft: 20,
        fontSize: 16,
        color: '(rgba(63, 31, 114, 1)',
        fontFamily:'baloo-bhaina',
        // opacity: 0.7
    },

    meaning: {
        
        width: 315.5,
        maxWidth: '80%',
        height: 138,
        marginLeft: -50 ,
        marginTop: 200,
        paddingLeft: 45,
        fontSize: 16,
        color: '(rgba(63, 31, 114, 0.8)',
        fontFamily:'baloo-bhaina',
        
    },
    // buttonContainer: {
    //     // flexDirection: 'row',
    //     width: '100%',
    //     // justifyContent:'space-between',
    //     padding: 30,
    //     paddingHorizontal: 15,
    // },
    btnTeach: {
        width: 105,
        height: 45,
        fontFamily:'baloo-bhaina'
    },
    Text: {
        color: Colors.primary,
        fontSize: 16,
        textAlign: 'center',
        fontFamily:'baloo-bhaina'
    },
   
});

export default TeachScreen;
