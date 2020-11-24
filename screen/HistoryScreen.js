import React from "react";
import {
    Dimensions,
    ImageBackground,
    ScrollView,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity, Keyboard,
    KeyboardAvoidingView,
} from "react-native";

import { Ionicons } from '@expo/vector-icons'
import bgImage from "../assets/History.png";
import Block from "../components/BlockNoShadow";
import Colors from '../constants/color';

const HistoryScreen = (props) => {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
                    <View style={styles.screen}>

                        <View style={styles.header}>

                            <Text style={styles.HisText}> History </Text>
                            <TouchableOpacity
                                style={styles.icon}
                                onPress={() => { }}
                            >
                                <Ionicons name="ios-trash" size={40} color="#fff" />
                            </TouchableOpacity>

                        </View>
                        <Block style={styles.HisBlock}>
                            <ScrollView>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('Word');
                                }}
                                >
                                    <Text style={styles.Text}>ตุยเย่</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </Block>

                    </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
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
    header: {
        marginTop: 70,
        width: 360,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    HisText: {
        marginTop: -10,
        color: "#ffffff",
        fontSize: 50,
        fontFamily: "baloo-bhaina-bold",
        flex: 6,
    },
    icon: {
        marginTop: 5,
        flex: 1,
        alignItems: 'center',
    },
    HisBlock: {
        width: 360,
        height: 625,
        marginTop: 20,
        paddingTop: 30,
        paddingLeft: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 15,
    },
    Text: {
        color: Colors.primary,
        fontSize: 18,
        fontFamily: 'baloo-bhaina',
    },
});

export default HistoryScreen;