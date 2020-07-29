// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Appbar  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';



import Profile from './screens/Profile';
import Offers from './screens/Offers';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import CreateOffer from './screens/CreateOffer';

function HomeScreen({navigation}) {
  return (
    <View>
     <Appbar.Header>
      <Appbar.Action icon="dots-vertical" onPress={() => navigation.toggleDrawer()}/>
      <Appbar.Content title="Dashboard"  />
      <Appbar.Action icon="dots-vertical"  />
    </Appbar.Header>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />

       <Button
        title="drw"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>

    <Dashboard />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
     
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Offers" component={Offers} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="CreateOffer" component={CreateOffer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;