import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './screens/RegistrationScreen';
import EcommerceScreen from './screens/EcommerceScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Ecommerce" component={EcommerceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
