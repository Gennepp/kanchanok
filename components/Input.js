import React, { useReducer, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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

const Input = props => {
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
            <TextInput
                {...props}
                style={{ ...styles.input, ...props.style }}
            // value={inputState.value}
            // onChangeText={textChangeHandler}
            // onBlur={lostFocusHandler}
            />
            {!inputState.isValid && <Text style={styles.errorText}>{props.errorText}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    // input: {
    //     fontSize: 16,
    //     color: 'black',
    //     shadowColor: "black",
    //     shadowOffset: { width: 0, height: 5 },
    //     shadowOpacity: 0.34,
    //     shadowRadius: 6.27,
    //     elevation: 5,
    //     backgroundColor: "white",
    //     padding: 20,
    //     borderRadius: 10,
    // },
    // label: {
    //     marginVertical: 8,
    //     paddingLeft: 10,
    //     fontSize: 17,
    //     fontWeight: 'bold',
    // },
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
        marginVertical: 5
    },
    errorText: {
        paddingVertical: 5,
        color: 'red',
        fontSize: 14,
        fontFamily: 'baloo-bhaina',
    }
});

export default Input;
