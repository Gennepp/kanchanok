import React from "react";
import {
    Dimensions,
    ImageBackground,
    View, ScrollView,
    Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard, FlatList,
    KeyboardAvoidingView,
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import bgImage from "../assets/Favorite.png";
import Block from "../components/BlockNoShadow";
import Colors from '../constants/color';
import FavWord from '../components/store/FavWord';
import * as WordsActions from '../store/actions/words';
import WordItem from '../components/store/WordItem';
import MyWord from '../components/store/MyWord';

const MyWordScreen = props => {
    const userWords = useSelector(state => state.words.userWords);
    const dispatch = useDispatch();
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
                            <Text style={styles.FavText}>My Words</Text>
                            {/* <TouchableOpacity
                                style={styles.icon}
                                //disabled={favWords.length === 0}
                                onPress={() => { }}
                            >
                                <Ionicons name="ios-trash" size={40} color="#fff" />
                            </TouchableOpacity> */}
                        </View>

                        <Block style={styles.FavBlock}>
                            <FlatList
                                data={userWords}
                                keyExtractor={item => item.id}
                                renderItem={itemData => (
                                    <MyWord
                                        title={itemData.item.title}
                                        onViewWord={() => {}}
                                        onDelete={() => {dispatch(WordsActions.deleteMyWord(itemData.item.id));}}
                                    />
                                )}
                            />
                        </Block>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
};

MyWordScreen.navigationOptions = navData => {
    return {
        //headerShown: false,
        headerTransparent: true,
        //title: navData.navigation.getParam('wordTitle'),
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
        marginTop: 80,
        width: 360,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
    },
    FavText: {
        marginLeft: 20,
        color: "#ffffff",
        fontSize: 48,
        fontFamily: "baloo-bhaina-bold",
        flex: 6,
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
        height: 690,
        marginTop: 30,
        paddingTop: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 15,
        //alignItems: 'center',
    },
    Text: {
        color: Colors.primary,
        fontSize: 18,
        fontFamily: 'baloo-bhaina',
    },
});

export default MyWordScreen;