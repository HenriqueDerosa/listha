import React from 'react';
import {View, StatusBar, SafeAreaView, Text} from 'react-native';
import SignIn from './pages/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './routes';
import colors from '../colors';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={{backgroundColor: colors.background, flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <AuthRoutes />
        </SafeAreaView>
      </View>
    </NavigationContainer>
  );
};

export default App;
