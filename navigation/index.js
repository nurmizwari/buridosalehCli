import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import User from '../screens/User';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'log-in-outline' : 'log-in-outline';
          }

          // Menggunakan ikon Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue', // Ubah warna ikon tab aktif
        tabBarInactiveTintColor: 'gray', // Ubah warna ikon tab non-aktif
        tabBarLabelStyle: {fontSize: 12}, // Ubah gaya label tab
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="User" component={User} options={{headerShown: false}} />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
