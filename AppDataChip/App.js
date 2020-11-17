import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './redux/store/';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Bank from './components/Bank'
import Profile from './components/Profile'

const Tab = createBottomTabNavigator();


export default function App() {
  const dimensions = useWindowDimensions();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
          initialRouteName="Banco"
        >
          <Tab.Screen name="Banco" component={ Bank } />
          <Tab.Screen name="Perfil" component={ Profile } />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
  