import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
    input: {
        // borderBottomColor: 'grey',
        // borderBottomWidth: 1,
        // marginVertical: 10,
        fontSize: 16,
        color: 'black',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    }
});

export default Input;
