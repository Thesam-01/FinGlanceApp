// App.js
// Wires together the 5 FinGlance screens using React Navigation.
//
// Before running this, make sure you have a "screens" folder inside
// your project with these 5 files, matching the names below:
//   screens/WelcomeScreen.js
//   screens/ConnectAccountsScreen.js
//   screens/DashboardScreen.js
//   screens/TransactionsScreen.js
//   screens/AliasCodeScreen.js
//
// (These are the files from the docx exports — just paste each
// screen's code into a matching file inside the screens folder.)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import ConnectAccountsScreen from './screens/ConnectAccountsScreen';
import DashboardScreen from './screens/DashboardScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import AliasCodeScreen from './screens/AliasCodeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: '#FFFFFF' },
          headerTintColor: '#111111',
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConnectAccounts"
          component={ConnectAccountsScreen}
          options={{ title: 'Connect Accounts' }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Dashboard', headerBackVisible: false }}
        />
        <Stack.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{ title: 'Transactions' }}
        />
        <Stack.Screen
          name="AliasCode"
          component={AliasCodeScreen}
          options={{ title: 'Your Code' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

