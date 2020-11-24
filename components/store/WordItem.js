import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/color';
import { FontAwesome } from '@expo/vector-icons';

const WordItem = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.wordContainer} onPress={props.onViewWord}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={() => { }}>
                <FontAwesome name="star-o" size={25} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sound} onPress={() => { }}>
                <FontAwesome name="volume-up" size={25} color={Colors.primary} />
            </TouchableOpacity>
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.line,
            }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: Colors.line,
        flexDirection: 'row',
        alignItems: 'center',
    },
    wordContainer: {
        height: 50,
        paddingLeft: 12,
        justifyContent: 'center',
        flex: 7,
    },
    text: {
        color: Colors.primary,
        fontSize: 20,
        fontFamily: 'baloo-bhaina-med',
    },
    star: { flex: 1, },
    sound: { flex: 1, },
});

export default WordItem;