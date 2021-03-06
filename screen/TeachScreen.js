import React, { useState, useEffect, useCallback } from 'react';
import {
    Dimensions,
    ImageBackground,
    View, Text, TextInput,
    StyleSheet, Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard, KeyboardAvoidingView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { MaterialIcons } from '@expo/vector-icons'
import Input from '../components/Input';
import Buttons from '../components/Button';
import Colors from '../constants/color';
import bgImage from '../assets/Teach.png';
import * as wordsActions from '../store/actions/words';

const TeachScreen = (props) => {
    const wordId = props.navigation.getParam('wordId');
    const editedMyWord = useSelector(state =>
        state.words.userWords.find(word => word.id === wordId)
    );

    const dispatch = useDispatch();

    const [title, setTitle] = useState(editedMyWord ? editedMyWord.title : '');
    const [definition, setDefinition] = useState(editedMyWord ? editedMyWord.definition : '');

    const submitHandler = useCallback(() => {
        if (editedMyWord) {
            dispatch(wordsActions.updateWord(wordId, title, definition));
        } else {
            dispatch(wordsActions.createWord(title, definition));
        }
        props.navigation.goBack();
    }, [dispatch, wordId, title, definition]);

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler });
    }, [submitHandler]);

    const submitFn = props.navigation.getParam('submit');

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <KeyboardAvoidingView
                    behavior='position'
                    contentContainerStyle={styles.screen}
                    keyboardVerticalOffset={-70}
                    style={styles.screen}
                >
                    <Text style={styles.YText}> You </Text>
                    <Text style={styles.TText}> TEACH </Text>
                    <Text style={styles.IText}> I </Text>
                    <Text style={styles.LText}> LEARN </Text>
                    <View style={styles.screen}>
                        <View style={styles.inputContainer}>
                            <Input
                                style={styles.input}
                                value={title}
                                onChangeText={text => setTitle(text)}
                                placeholder={'Type something...'}
                                placeholderTextColor={Colors.primary}
                                autoCorrect={false}
                                autoCapitalize='none'
                                maxLength={100}
                            />
                            <Input
                                style={styles.input2}
                                value={definition}
                                onChangeText={text => setDefinition(text)}
                                placeholder={'Meaning...'}
                                placeholderTextColor={Colors.primary}
                                autoCorrect={false}
                                autoCapitalize='none'
                                maxLength={100}
                            />
                        </View>
                        <Buttons style={styles.btnTeach} onPress={submitFn}>
                            <Text style={styles.Text}>{props.navigation.getParam('wordId') ? 'Edit' : 'Teach Me'}</Text>
                        </Buttons>

                    </View>

                </KeyboardAvoidingView>

            </TouchableWithoutFeedback >

        </ImageBackground >
    );
};

TeachScreen.navigationOptions = {
    //headerShown: false,
    headerTransparent: true,
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
    YText: {
        color: "#ffffff",
        fontSize: 34,

        fontFamily: "baloo-bhaina-bold",
        marginTop: 100,
        marginLeft: -180
    },
    TText: {
        color: "#ffffff",
        fontSize: 48,

        fontFamily: "baloo-bhaina-bold",
        marginTop: -85,
        marginLeft: 60
    },
    IText: {
        color: "#ffffff",
        fontSize: 34,
        fontFamily: "baloo-bhaina-bold",
        marginTop: 0,
        marginLeft: -350
    },
    LText: {
        color: "#ffffff",
        fontSize: 48,
        fontFamily: "baloo-bhaina-bold",
        marginTop: -85,
        marginLeft: -150
    },
    inputContainer: {
        marginTop: 140,
        alignItems: 'flex-end',
    },
    input: {
        width: 242,
        maxWidth: '80%',
        height: 138,
        paddingLeft: 35,
        fontSize: 18,
        color: '(rgba(63, 31, 114, 1)',
        fontFamily: 'baloo-bhaina',
    },
    input2: {
        width: 370,
        maxWidth: '80%',
        height: 138,
        paddingVertical: 20,
        paddingLeft: 35,
        fontSize: 18,
        color: '(rgba(63, 31, 114, 1)',
        fontFamily: 'baloo-bhaina',
    },
    btnTeach: {
        width: 135,
        height: 45,
        fontFamily: 'baloo-bhaina',
        marginTop: 10,
    },
    Text: {
        color: Colors.primary,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'baloo-bhaina'
    },
});

export default TeachScreen;
