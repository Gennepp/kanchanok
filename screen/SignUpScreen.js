import React from 'react';
import {
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard, KeyboardAvoidingView
} from 'react-native';
// import { MaterialIcons} from '@expo/vector-icons'

import { FontAwesome5 , MaterialIcons, Feather ,MaterialCommunityIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import Buttons from '../components/Button';
import Colors from '../constants/color';
import bgImage from '../assets/Signup.png';

const SignUpScreen = (props) => {
    // console.log(props);
    return (
        
        <ImageBackground source={bgImage} style={styles.screen}>
            <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}> 
                <View style={styles.screen}>
                    {/* <Text style={styles.title}>You TEACH</Text>
                    <Text style={styles.subTitle}>I LEARN</Text> */}
                    
                    <View>
                    <Text style={styles.SuText}> SIGN UP </Text>
                    </View>
                
                    <View>
                    <Feather name="user" size={30} color="black"  style={{marginTop: 130 , marginLeft: -20}} />
                        <Input
                            style={styles.input}
                            placeholder={'Username'}
                            placeholderTextColor={Colors.primary}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={10}
                           
                        />
                    </View>
                   
                       

                    <View >
                    <MaterialCommunityIcons name="email-outline" size={30} color="black"  style={{marginTop: 50 , marginLeft: -20}} />
                        <Input
                            style={styles.inputmail}
                            placeholder={'E-mail'}
                            placeholderTextColor={Colors.primary}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={50}
                        // underlineColorAndroid='transparent'
                        />
                    </View>

                    <View>
                    <MaterialIcons name="lock-outline" size={30} color="black"  style={{marginTop: 50 , marginLeft: -20}} />
                        <Input
                            style={styles.inputpass}
                            placeholder={'Password'}
                            placeholderTextColor={Colors.primary}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={10}
                        // underlineColorAndroid='transparent'
                        />
                    </View>

                   

                         <MaterialIcons name="navigate-before" size={60} color='white' marginTop style={{marginTop:-515 , marginLeft: -350}}/>
                    
                    <Buttons style={styles.btnmail}>
                        <Text style={styles.Text}>CREATE ACCOUNT</Text>
                    </Buttons>
                    
                   
                </View>
            </TouchableWithoutFeedback >
            </KeyboardAvoidingView>
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
   
    input: {
        
        width: 250,
        maxWidth: '100%',
        height: 45,
        // alignItems: 'baseline',
        //marginTop: 25,
        marginLeft: 40 ,
        marginTop: -35,
        paddingLeft: 20,
        fontSize: 16,
        color: 'black',
        fontFamily:'baloo-bhaina',
    },
    inputmail: {
        
        width: 250,
        maxWidth: '100%',
        height: 45,
        marginLeft: 40 ,
        marginTop: -35,
        paddingLeft: 20,
        fontSize: 16,
        color: 'black',
        fontFamily:'baloo-bhaina',
        
    },

    inputpass: {
        
        width: 250,
        maxWidth: '100%',
        height: 45,
        marginLeft: 40 ,
        marginTop: -35,
        paddingLeft: 20,
        fontSize: 16,
        color: 'black',
        fontFamily:'baloo-bhaina',
        
    },
    // buttonContainer: {
    //     // flexDirection: 'row',
    //     width: '100%',
    //     // justifyContent:'space-between',
    //     padding: 30,
    //     paddingHorizontal: 15,
    // },
    btnmail: {
        width: 180,
        height: 40,
        fontFamily:'baloo-bhaina',
        marginTop: 500
    },
    Text: {
        color: Colors.primary,
        fontSize: 20,
        textAlign: 'center',
        fontFamily:'baloo-bhaina'
    },
    SuText: {
        color: '#ffffff',
        fontSize: 40,
        textAlign: 'center',
        fontFamily:'baloo-bhaina-bold',
        marginTop: 120
    },
   
});

export default SignUpScreen;
