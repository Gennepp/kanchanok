import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import SignUpScreen from '../screen/SignUpScreen';
import TestScreen from '../screen/TestScreen';
import LoginPfScreen from '../screen/LoginPfScreen';

const WordNavigator = createStackNavigator({
    Login: LoginPfScreen,
    SignUp: SignUpScreen,
    Test: TestScreen,
});

export default createAppContainer(WordNavigator);