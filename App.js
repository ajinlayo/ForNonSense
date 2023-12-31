import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LogInSignUp from './screens/LogInSignUp';
import SignUpPage from './screens/SignUpPage';
import LogInPage from './screens/LogInPage';
import LandingPage from './screens/LandingPage';
import HomeScreen from './navbuttons/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <HomeScreen />
       
    </NavigationContainer>
  );
};

export default App;

{/* <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LogInSignUp" component={LogInSignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpPage} options={{ headerShown: false }} />
        <Stack.Screen name="LogIn" component={LogInPage} options={{ headerShown: false }} />
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
      </Stack.Navigator>
       */}