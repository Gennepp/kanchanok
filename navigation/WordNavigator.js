import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignUpScreen from '../screen/SignUpScreen';
import TestScreen from '../screen/TestScreen';
import LoginPfScreen from '../screen/LoginPfScreen';
import ForgotScreen from '../screen/ForgotScreen';
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
    Forgot: ForgotScreen,
    Test: TestScreen,
}, {
    navigationOptions: {
        //headerShown: false,  
        //headerTransparent: true
    }
}
);

const WordTabNavigator = createBottomTabNavigator({
    Search: {
        screen: WordNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Feather name="search" size={40} color={tabInfo.tintColor} />;
            }
        }
    },
    Favorite: {
        screen: FavoriteScreen, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <FontAwesome name="star" size={40} color={tabInfo.tintColor} />;
            }
        }
    },
    History: {
        screen: HistoryScreen, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Feather name="clock" size={40} color={tabInfo.tintColor} />;
            }
        }
    },
    Profile: {
        screen: ProfileScreen, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons name="face" size={45} color={tabInfo.tintColor} />
            }
        }
    },
}, {
    tabBarComponent: WordTabNavigator,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: Colors.primary,
        showLabel: false,
        style: {
            alignSelf: 'center',
            width: 360,
            height: 35,
            paddingBottom: -20,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderTopWidth: 0,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            //borderTopColor: 'rgba(22, 22, 22, 0)',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
        },
    },
});

const FavoriteNavigator = createStackNavigator({
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