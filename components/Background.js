import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Background = (props) => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
    backgroundContainer:{
        flex: 1,
        height: null,
        width: null,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
});

export default Background;
