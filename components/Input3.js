import React, { useReducer, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

import Color from '../constants/color';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            };
        case INPUT_BLUR:
            return {
                ...state,
                touched: true
            };
        default:
            return state;
    }

};

const Input3 = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initiallyValid,
        touched: false
    });

    const { onInputChange, id } = props;

    useEffect(() => {
        if (inputState.touched) {
            onInputChange(id, inputState.value, inputState.isValid);
        }
    }, [inputState, onInputChange, id]);

    const textChangeHandler = text => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if (props.required && text.trim().length === 0) {
            isValid = false;
        }
        if (props.email && !emailRegex.test(text.toLowerCase())) {
            isValid = false;
        }
        if (props.min != null && +text < props.min) {
            isValid = false;
        }
        if (props.max != null && +text > props.max) {
            isValid = false;
        }
        if (props.minLength != null && text.length < props.minLength) {
            isValid = false;
        }
        dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
    };

    const lostFocusHandler = () => {
        dispatch({ type: INPUT_BLUR });
    };

    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                {...props}
                style={{ ...styles.input, ...props.style }}
            // value={inputState.value}
            // onChangeText={textChangeHandler}
            // onBlur={lostFocusHandler}
            />
            {!inputState.isValid && <Text style={styles.errorText}>{props.errorText}</Text>}
            {/* <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{props.errorText}</Text>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        paddingLeft: 5,
        fontSize: 23,
        fontFamily: 'baloo-bhaina-bold',
        color: Color.primary,
    },
    input: {
        fontSize: 16,
        color: 'black',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        backgroundColor: "white",
        borderRadius: 10,
    },
    errorContainer: {
        //marginVertical: 5
    },
    errorText: {
        //paddingVertical: 5,
        color: 'black',
        fontSize: 14,
        fontFamily: 'baloo-bhaina',
    }
});

export default Input3;
