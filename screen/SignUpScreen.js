import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpScreen = props => {
    return (
    <View style={styles.screen}>
            <Text >Sign Up Screen!</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignUpScreen;