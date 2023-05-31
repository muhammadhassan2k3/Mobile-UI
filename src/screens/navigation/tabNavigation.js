import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../Feed'
import ContentScreen from '../content';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MarketScreen from '../Market';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 100,
        borderTopColor: '#BDC5CD',
        paddingTop: 9,
        borderTopWidth: 1,
      },
      tabBarActiveTintColor: '#5DB075',
      tabBarInactiveTintColor: '#E8E8E8'
    }}>
      <Tab.Screen name="Eeed" component={Feed} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color }) => {
          return (
            <FontAwesome name='circle' size={40} color={color} />
          )
        }
      }} />
      <Tab.Screen name="Seed" component={Feed} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color }) => {
          return (
            <FontAwesome name='circle' size={40} color={color} />
          )
        }
      }} />
      <Tab.Screen name="Keed" component={Feed} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color }) => {
          return (
            <FontAwesome name='circle' size={40} color={color} />
          )
        }
      }} />
      <Tab.Screen name="Veed" component={ContentScreen} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color }) => {
          return (
            <FontAwesome name='circle' size={40} color={color} />
          )
        }
      }} />
      <Tab.Screen name="Need" component={MarketScreen} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color }) => {
          return (
            <FontAwesome name='circle' size={40} color={color} />
          )
        }
      }} />
    </Tab.Navigator>
  );
};

export default MyTabs;