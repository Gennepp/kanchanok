import React from 'react';
import {
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard, KeyboardAvoidingView
} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons'

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

            <KeyboardAvoidingView
                    behavior='position'
                    contentContainerStyle={styles.screen}
                    keyboardVerticalOffset={20}
                    style={styles.screen}
                >
          
                <View style={styles.screen}>
                    {/* <Text style={styles.title}>You TEACH</Text>
                    <Text style={styles.subTitle}>I LEARN</Text> */}
                    
                    <KeyboardAvoidingView        
                            style={styles.container}
                             behavior="padding" 
                     >
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
                    

                         <MaterialIcons name="navigate-before" size={60} color='white' marginTop style={{marginTop:-665 , marginLeft: -350}}/>
                    
                    <Buttons style={styles.btnTeach}>
                        <Text style={styles.Text}>Teach me</Text>
                    </Buttons>
                    
                    </KeyboardAvoidingView>
                    
                </View>
                </KeyboardAvoidingView>
                
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
   
    input: {
        
        width: 242,
        maxWidth: '80%',
        height: 138,
        marginLeft: 80 ,
        marginTop: 390,
        paddingLeft: 20,
        fontSize: 16,
        color: '(rgba(63, 31, 114, 1)',
        fontFamily:'baloo-bhaina',
        // opacity: 0.7
    },

    meaning: {
        
        width: 370,
        maxWidth: '100%',
        height: 138,
        marginLeft: -45 ,
        marginTop: 40,
        paddingLeft: 45,
        fontSize: 16,
        color: '(rgba(63, 31, 114, 1)',
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
        width: 135,
        height: 45,
        fontFamily:'baloo-bhaina',
        marginTop: 640,
        marginLeft: 96
    },
    Text: {
        color: Colors.primary,
        fontSize: 20,
        textAlign: 'center',
        fontFamily:'baloo-bhaina'
    },
    
   
});

export default TeachScreen;
