import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import SignUpScreen from '../screen/SignUpScreen';
import TestScreen from '../screen/TestScreen';

const WordNavigator = createStackNavigator({
    SignUp: SignUpScreen,
    Test: TestScreen,
});

export default createAppContainer(WordNavigator);