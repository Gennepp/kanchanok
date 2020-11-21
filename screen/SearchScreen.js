import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SearchScreen = props => {
    return (
    <View style={styles.screen}>
            <Text >Search Screen!</Text>
            <Button title="Test!" onPress={() => {
                props.navigation.navigate('Test'); }} />
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

export default SearchScreen;