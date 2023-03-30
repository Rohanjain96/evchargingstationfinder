
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChargerDetails from './screens/ChargerDetails';
import ShowSlots from './screens/ShowSlots';
import PaymentPage from './screens/PaymentPage';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ShowSlots" component={ShowSlots}  options={{
          title: "Book a session",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'chartreuse',
          },
        }}/>
        <Stack.Screen name="ChargerDetails" component={ChargerDetails} options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'chartreuse',
          },
        }} />
        <Stack.Screen name='PaymentPage' component={PaymentPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
