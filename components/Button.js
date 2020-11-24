import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

const Button = (props) => {
    return <TouchableOpacity {...props} style={{ ...styles.button, ...props.style }}>{props.children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
    button: {
        width: 10,
        height: 45,
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: 'white',
        padding: 0,
        borderRadius: 25,
        justifyContent: 'center',
    },
});

export default Button;
