import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Block from '../../components/Block';
import Colors from '../../constants/color';

const WordCard = props => {
    return
    <View>
        <Block style={styles.block1}>
            <View style={styles.wordBox}><Text style={styles.wordTitle}>{props.title}</Text></View>
            <TouchableOpacity style={styles.star}>
                <FontAwesome name="star" size={30} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sound}>
                <FontAwesome name="volume-up" size={30} color={Colors.primary} />
            </TouchableOpacity>
        </Block>

        <View>
            <Block style={styles.block2}>
                <Text style={styles.Text}>{props.definition}</Text>
            </Block>
        </View>
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
    },
    block1: {
        flexDirection: 'row',
        width: 360,
        height: 60,
        marginTop: 95,
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.34,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
    },
    wordBox: {
        flex: 6,
        paddingTop: 20,
        paddingLeft: 5,
        width: 260,
        height: 60,
        //backgroundColor: 'black'
    }, 
    wordTitle: {
        color: '#3F1F72',
        fontSize: 18,
        marginLeft: 30,
        fontFamily: 'baloo-bhaina-bold',
    },
    star: {flex: 1,},
    sound: {flex: 1,},
    block2: {
        paddingTop: 30,
        paddingLeft: 30,
        width: 360,
        height: 680,
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 15,
    }, 
    Text: {
        color: '#3F1F72',
        fontSize: 16,
        fontFamily: 'baloo-bhaina',
    },
});

export default WordCard;