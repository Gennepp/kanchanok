import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

const Button = (props) => {
    return <TouchableOpacity style={{ ...styles.button, ...props.style }}>{props.children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
    button: {
        width: 10,
        height: 45,
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        backgroundColor: 'white',
        padding: 0,
        borderRadius: 25,
        justifyContent: 'center',
    },
});

export default Button;
