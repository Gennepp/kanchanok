import React from 'react';
import {
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,Title,
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

import bgImage from '../assets/About_us.png';

const Meaning = (props) => {
    // console.log(props);
    return (
        <ImageBackground source={bgImage} style={styles.screen}>
            <View style={styles.top}>
                <View>
                     <TouchableOpacity style={styles.icon} onPress={() => {}}>
                         <MaterialIcons name ='navigate-before' size={60} color="white" />
                     </TouchableOpacity>
                 </View>
                <View>
                    <Text style={styles.Text}>About Us</Text>
                </View>
            </View>
                <View>
                    <Block style={styles.blockAbout_us}>
                        <Text style={styles.Text2}><Entypo name ='facebook-with-circle' size={30} color= '#4658fc'/>   S1G5</Text>
                        <Text style={styles.Text2}><Entypo name ='mail'size={30} color= '#F7EC90'/>  S1G5@hotmail.com</Text>
                        <Text style={styles.Text2}><FontAwesome name ='home'size={30} color= '#8B5353'/>   KMITL,Lardkrabang</Text>
                        <Text style={styles.Text2}><Ionicons name ='ios-call'size={30}  color= '#7BCDCD'/>   012-3456789</Text>
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
    blockAbout_us: {
        width: 350,
        height: 300,
        marginTop: 50,
        // alignItems:'center',
    },
   top: {
        flexDirection:'row',
    },
    Text: {
        color: '#ffff',
        fontSize: 60,
        textAlign:'center',
        fontFamily:'baloo-bhaina-bold',
        marginTop:85,
    },
    Text2: {
        color: 'black',
        fontSize: 27,
        marginLeft:30,
        fontFamily:'baloo-bhaina',
        marginTop:10,
    },
    icon: {
        marginLeft:-90,
        marginTop:40,
    },
    
});

export default Meaning;
