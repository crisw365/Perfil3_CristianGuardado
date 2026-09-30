import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import APIViewScreen from './src/screens/APIViewScreen';

const Stack = createNativeStackNavigator();

/**
 * Componente principal de la aplicación.
 * Configura la navegación entre las dos pantallas requeridas.
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0F0F1A',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: '#0F0F1A',
          },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="APIView"
          component={APIViewScreen}
          options={{
            title: 'Personajes',
            headerBackTitle: 'Inicio',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
