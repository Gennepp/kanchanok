import React from 'react';
import {
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,icon,
    Keyboard,Contain
} from 'react-native';

import{
    FontAwesome
}from'@expo/vector-icons';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';

import bgImage from '../assets/search.png';

const SearchScreen = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <View style={styles.screen}>
                    <View style={styles.Contain}>

                    <View > 
                        
                    <TextInput
                            style={styles.input}
                            placeholder={'Search here'}
                            placeholderTextColor={Colors.primary}
                            autoCorrect={false}
                            autoCapitalize='none'
                            maxLength={10}
                            flexDirection = 'row'
                            backgroundColor ="white"
                            opacity = {0.8}
                            borderRadius = {15}
                        // underlineColorAndroid='transparent'
                        /> 
                        
                        <View style={styles.icon}>
                            <FontAwesome name="search" size={30} color='#3F1F72' />
                        </View>
                    </View>
                    </View>
                    <View>
                    <Block style={styles.block}>
                        <Text style={styles.Text}>ตุยเย่</Text>
                    </Block>
                    </View>

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
    input: {
        width: 420,
        maxWidth: '80%',
        height: 60,
        marginTop:10,
        marginLeft:40,
        paddingLeft: 45,
        fontSize: 16,
        color: 'black',
    },
    Contain: {
        flexDirection:'row',
        marginRight:-150,
        marginTop:105,
        width:600,
        // marginTop:90,
        // marginRight:300,
    },
    Text: {
        color: Colors.primary,
        fontSize: 24,
        fontFamily: 'baloo-bhaina',
    },
    block:{
        width: 370,
        height:560,
        marginTop: 40,
        marginLeft:2,
        flexDirection: 'row',
        opacity:0.85,
    },
    icon:{
        marginTop:-48,
        marginLeft:50,
    },
});

export default SearchScreen;
