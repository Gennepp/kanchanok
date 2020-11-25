import React, { useState, useEffect, useCallback } from 'react';
import {
    Dimensions,
    ImageBackground,
    View, Text, TextInput,
    FlatList, ActivityIndicator,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity, icon,
    Keyboard, Contain,
    KeyboardAvoidingView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesome } from '@expo/vector-icons';

import Block from '../components/Block';
import Colors from '../constants/color';
import Input from '../components/Input';
import Buttons from '../components/Button';
import WordItem from '../components/store/WordItem';
import * as FavActions from '../store/actions/favorite';
import * as HisActions from '../store/actions/history';
import * as wordsActions from '../store/actions/words';

import bgImage from '../assets/search.png';
import { ScrollView } from 'react-native-gesture-handler';



const SearchScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const words = useSelector(state => state.words.availableWords);
    const dispatch = useDispatch();

    const loadedWords = useCallback(async () => {
        console.log('load');
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(wordsActions.fetchWords());
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        const willFocusSub = props.navigation.addListener('willFocus', loadedWords);

        return () => {
            willFocusSub.remove();
        };
    },[loadedWords]);

    useEffect(() => {
        loadedWords();
    }, [dispatch, loadedWords]);

    if (error) {
        return <View style={styles.indicator}>
            <Text>An Error Ocurred!</Text>
            <Button title="Try again" onPress={loadedWords} color={Colors.primary} />
        </View>
    }

    if (isLoading) {
        return <View style={styles.indicator}>
            <ActivityIndicator size='large' color={Colors.primary} />
        </View>
    }

    // if (!isLoading && words.length === 0) {
    //     return (<View style={styles.indicator}>
    //         <Text>No words found.</Text>
    //     </View>
    //     );
    // }

    return (

        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <View style={styles.screen}>
                    <KeyboardAvoidingView
                        behavior='padding'
                        contentContainerStyle={styles.screen}
                        keyboardVerticalOffset={20}

                    >
                        <View style={styles.inputContainer}>
                            <TouchableOpacity style={styles.icon}>
                                <FontAwesome name="search" size={30} color={Colors.primary} />
                            </TouchableOpacity>
                            <Input
                                style={styles.input}
                                id="word"
                                placeholder={'Search here'}
                                placeholderTextColor={Colors.primary}
                                //onInputChange={inputChangeHandler}
                                initialValue=""
                            />
                        </View>
                    </KeyboardAvoidingView>
                    <Block style={styles.block}>
                        <FlatList
                            data={words}
                            keyExtractor={item => item.id}
                            renderItem={itemData => (
                                <WordItem
                                    title={itemData.item.title}
                                    onViewWord={() => {
                                        props.navigation.navigate('Word', {
                                            wordId: itemData.item.id,
                                            wordTitle: itemData.item.title,
                                        });
                                    }}
                                    onAddFav={() => {
                                        dispatch(FavActions.addToFav(itemData.item));
                                    }}
                                    onAddHis={() => {
                                        dispatch(HisActions.addToHis(itemData.item));
                                    }}
                                />
                            )}
                        />
                    </Block>
                </View>
            </TouchableWithoutFeedback >
        </ImageBackground >
    );
};

SearchScreen.navigationOptions = {
    //headerShown: false,
    headerTransparent: true,
    title: null,
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

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    inputContainer: {
        flexDirection: 'row',
        width: 360,
        height: 60,
        marginTop: 70,
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.34,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
    },
    input: {
        width: 330,
        height: 60,
        paddingTop: 5,
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: 'baloo-bhaina',
        color: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    Text: {
        color: Colors.primary,
        fontSize: 18,
        fontFamily: 'baloo-bhaina',
    },
    block: {
        width: 360,
        height: 625,
        marginTop: 20,
        paddingTop: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 15,
        alignItems: 'center',
    },
    icon: {
        marginTop: 15,
        paddingLeft: 18,
        alignSelf: 'flex-start',
    },
});

export default SearchScreen;
