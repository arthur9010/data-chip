import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Store } from './redux/store/';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Bank from './components/Bank'
import Profile from './components/Profile'

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    myOwnColor: '#BADA55',
  }
};

export default function App() {
  const dimensions = useWindowDimensions();

  return (
    <StoreProvider store={Store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
            initialRouteName="Perfil"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Banco') {
                  iconName = 'ios-cash'
                } else if (route.name === 'Perfil') {
                  iconName = 'ios-contact'
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Banco" component={ Bank } />
            <Tab.Screen name="Perfil" component={ Profile } />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
  