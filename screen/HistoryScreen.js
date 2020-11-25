import React from "react";
import {
    Dimensions,
    FlatList,
    ImageBackground,
    ScrollView,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity, Keyboard,
    KeyboardAvoidingView,
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';


import { Ionicons } from '@expo/vector-icons'
import bgImage from "../assets/History.png";
import Block from "../components/BlockNoShadow";
import Colors from '../constants/color';
import HisWord from '../components/store/HisWord';
import * as HisActions from '../store/actions/history';

const HistoryScreen = (props) => {
    const hisWords = useSelector(state => {
        const transformedHisWords = [];
        for (const key in state.history.words) {
            transformedHisWords.push({
                wordId: key,
                wordTitle: state.history.words[key].wordTitle,
                wordDefinition: state.history.words[key].wordDefinition,
                quantity: state.history.words[key].quantity,
                sum: state.history.words[key].sum,
            })
        }
        return transformedHisWords;
    });
    const dispatch = useDispatch();
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
                                onPress={() => {dispatch(HisActions.removeFromHis());}}
                            >
                                <Ionicons name="ios-trash" size={40} color="#fff" />
                            </TouchableOpacity>

                        </View>
                        <Block style={styles.HisBlock}>
                        <FlatList
                                data={hisWords}
                                keyExtractor={item => item.wordId}
                                renderItem={itemData => (
                                    <HisWord
                                        title={itemData.item.wordTitle}
                                        quantity={itemData.item.quantity}
                                        amount={itemData.item.sum}
                                        onViewWord={() => {
                                            props.navigation.navigate('Word', {
                                                wordId: itemData.item.wordId,
                                                wordTitle: itemData.item.wordTitle,
                                            });
                                        }}
                                        onRemove={() => { 
                                            dispatch(HisActions.removeFromHis(itemData.item.wordId));
                                        }}
                                    />
                                )}
                            />
                        </Block>

                    </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
};

HistoryScreen.navigationOptions = {
    headerTransparent: true,
    title: null,
    headerBackTitleVisible: false,
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
        paddingTop: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 15,
        alignItems: 'center',
    },
    Text: {
        color: Colors.primary,
        fontSize: 18,
        fontFamily: 'baloo-bhaina',
    },
});

export default HistoryScreen;