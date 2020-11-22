import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignUpScreen from '../screen/SignUpScreen';
import TestScreen from '../screen/TestScreen';
import LoginPfScreen from '../screen/LoginPfScreen';
import SearchScreen from '../screen/SearchScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import HistoryScreen from '../screen/HistoryScreen';
import ProfileScreen from '../screen/ProfileScreen';
import WordScreen from '../screen/WordScreen';

import Colors from '../constants/color';

import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterial } from 'react-navigation-material-bottom-tabs';

const WordNavigator = createStackNavigator({
    Search: LoginPfScreen,
    Favorite: FavoriteScreen,
    History: HistoryScreen,
    Profile: ProfileScreen,
    Login: LoginPfScreen,
    SignUp: SignUpScreen,
    Test: TestScreen,
});

const WordTabNavigator = createBottomTabNavigator({
    Search: { screen: WordNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Feather name="search" size={35} color={tabInfo.tintColor} />;
        }
    }},
    Favorite: { screen: FavoriteScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <FontAwesome name="star" size={35} color={tabInfo.tintColor} />;
        }
    }},
    History: { screen: HistoryScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Feather name="clock" size={35} color={tabInfo.tintColor} />;
        }
    }},
    Profile: { screen: ProfileScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <MaterialCommunityIcons name="face" size={40} color={tabInfo.tintColor} />
        }
    }},
}, {
    tabBarOptions: {
        activeTintColor: Colors.primary,
        showLabel: false
    }
});

createStackNavigator({
    Favorite: FavoriteScreen,
    Word: WordScreen,
});

const AuthNavigator = createStackNavigator({
    Auth: LoginPfScreen,
});

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Search: WordNavigator,
});

export default createAppContainer(WordNavigator);