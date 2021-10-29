import React from 'react';
import { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './containers/Home';
import Splash from './containers/Splash'

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
          <NavigationContainer>
            <Stack.Navigator>

              <Stack.Screen
              name="Splash"
              component={Splash}
              options = {{
                headerShown:false,
              }}
              />
            
              <Stack.Screen
              name="Home"
              component={Home}
              options = {{
                headerShown:false,
              }}
              />
              
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;