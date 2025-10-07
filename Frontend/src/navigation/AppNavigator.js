import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas
import HomeScreen from '../screens/HomeScreen';
import TripSetupScreen from '../screens/TripSetupScreen';
import PackingListScreen from '../screens/PackingListScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign: 'center' }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'PackPal' }} />
        <Stack.Screen name="TripSetup" component={TripSetupScreen} options={{ title: 'Configurar viaje' }} />
        <Stack.Screen name="PackingList" component={PackingListScreen} options={{ title: 'Mi lista' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
