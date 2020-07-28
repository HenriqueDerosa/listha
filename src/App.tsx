import React, {useState, useEffect} from 'react';
import {View, StatusBar, SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import SignIn from './pages/SignIn';
import AuthRoutes from './routes';
import colors from '../colors';

const App: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <SafeAreaView style={{flex: 1}}><Text>Loading</Text></SafeAreaView>;

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
