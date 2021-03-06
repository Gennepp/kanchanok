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

import { Ionicons } from '@expo/vector-icons'
import bgImage from "../assets/Favorite.png";
import Block from "../components/BlockNoShadow";
import Colors from '../constants/color';
import FavWord from '../components/store/FavWord';
import * as FavActions from '../store/actions/favorite';

const FavoriteScreen = (props) => {
    const favTotalAmount = useSelector(state => state.favorite.totalAmount);
    const favWords = useSelector(state => {
        const transformedFavWords = [];
        for (const key in state.favorite.words) {
            transformedFavWords.push({
                wordId: key,
                wordTitle: state.favorite.words[key].wordTitle,
                wordDefinition: state.favorite.words[key].wordDefinition,
                quantity: state.favorite.words[key].quantity,
                sum: state.favorite.words[key].sum,
            })
        }
        return transformedFavWords;
    });
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
                            <Text style={styles.FavText}> Favorite </Text>
                            <TouchableOpacity
                                style={styles.icon}
                                disabled={favWords.length === 0}
                                onPress={() => {dispatch(FavActions.removeAllFromFav());}}
                            >
                                <Ionicons name="ios-trash" size={40} color="#fff" />
                            </TouchableOpacity>
                        </View>

                        <Block style={styles.FavBlock}>
                            <FlatList
                                data={favWords}
                                keyExtractor={item => item.wordId}
                                renderItem={itemData => (
                                    <FavWord
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
                                            dispatch(FavActions.removeFromFav(itemData.item.wordId));
                                        }}
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


FavoriteScreen.navigationOptions = {
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
    icon: {
        marginTop: 5,
        flex: 1,
        alignItems: 'center',
    },
    FavText: {
        marginTop: -10,
        color: "#ffffff",
        fontSize: 50,
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

export default FavoriteScreen;