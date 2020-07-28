import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import colors from '../../colors';
import Lists from '../pages/Lists';

const Auth = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: colors.background,
  },
};

const AuthRoutes: React.FC = () => (
  <Auth.Navigator screenOptions={screenOptions} initialRouteName="Lists">
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Lists" component={Lists} />
  </Auth.Navigator>
);

export default AuthRoutes;
