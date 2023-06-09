
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChargerDetails from './screens/ChargerDetails';
import ShowSlots from './screens/ShowSlots';
import PaymentPage from './screens/PaymentPage';
import Login from './screens/Authentication/Login/Login';
import Signup from './screens/Authentication/Signup/Signup';
import SplashScreen from './screens/SplashScreen';
import StateProvider from './context/StateProvider';
import ProfileScreen from './screens/UserProfile';
import Bookings from './screens/Bookings';
import FilterScreen from './screens/FilterScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ShowEstimatePriceScreen from './screens/ShowEstimatePriceScreen';
import ChooseUnitsScreen from './screens/ChooseUnitsScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StateProvider>
        <Stack.Navigator initialRouteName='SplashScreen'>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="FilterScreen" component={FilterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="UserProfile" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Bookings" component={Bookings} options={{
            title: "",
            headerShadowVisible: false,
          }} />
          <Stack.Screen name="ChooseUnitsScreen" component={ChooseUnitsScreen} options={{
            title: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'chartreuse',
            },
          }} />
          <Stack.Screen name="EstimatePriceScreen" component={ShowEstimatePriceScreen} options={{
            title: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'chartreuse',
            },
          }} />
          <Stack.Screen name="ShowSlots" component={ShowSlots} options={{
            title: "Book a session",
            headerShadowVisible: false,
            headerTintColor:"white",
            headerStyle: {
              backgroundColor: 'chartreuse',
            },
          }} />
          <Stack.Screen name="ChargerDetails" component={ChargerDetails} options={{
            title: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'chartreuse',
            },
          }} />
          <Stack.Screen name='PaymentPage' component={PaymentPage}></Stack.Screen>
        </Stack.Navigator>
      </StateProvider>
    </NavigationContainer>
  );
}


export default App;
