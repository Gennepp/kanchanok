import React from "react";
import {
    Dimensions,
    ImageBackground,
    View, ScrollView,
    Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
} from "react-native";


import bgImage from "../assets/Favorite.png";
import Block from "../components/BlockNoShadow";
import Colors from '../constants/color';

const FavoriteScreen = (props) => {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <KeyboardAvoidingView
                    behavior='padding'
                    contentContainerStyle={styles.screen}
                    keyboardVerticalOffset={20}
                    style={styles.screen}
                >
                    <View style={styles.screen2}>
                        <View style={styles.header}>
                            <Text style={styles.FavText}> Favorite </Text>
                            <TouchableOpacity
                                style={styles.btnEdit}
                                onPress={() => { }}
                            >
                                <Text style={styles.EditText}>Edit</Text>
                            </TouchableOpacity>
                        </View>

                        <Block style={styles.FavBlock}>
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
                </KeyboardAvoidingView>
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
    screen2: {
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
    btnEdit: {
        flex: 1,
        alignItems: 'center',
    },
    FavText: {
        marginTop: -10,
        color: "#ffffff",
        fontSize: 50,
        fontFamily: "baloo-bhaina-bold",
        flex: 4,
    },
    EditText: {
        marginTop: 5,
        fontSize: 22,
        color: "white",
        fontFamily: "baloo-bhaina-bold",
        textDecorationLine: 'underline',
    },
    FavBlock: {
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

export default FavoriteScreen;