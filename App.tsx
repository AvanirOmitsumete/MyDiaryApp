import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import StatsScreen from './src/screens/StatsScreen';
import DetailScreen from './src/screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack navigator for the Diary tab (handles Home -> Detail transition)
function DiaryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

// Extracted outside to satisfy S6478
function renderTabBarIcon(route: { name: string }, focused: boolean, color: string, size: number) {
  let iconName: keyof typeof Ionicons.glyphMap = 'book';

  if (route.name === 'DiaryTab') {
    iconName = focused ? 'book' : 'book-outline';
  } else if (route.name === 'New Memory') {
    iconName = focused ? 'add-circle' : 'add-circle-outline';
  } else if (route.name === 'Insights') {
    iconName = focused ? 'stats-chart' : 'stats-chart-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => renderTabBarIcon(route, focused, color, size),
          tabBarActiveTintColor: '#0284c7',
          tabBarInactiveTintColor: 'gray',
          tabBarItemStyle: { flex: 1 },
          tabBarStyle: { height: 60, paddingBottom: 8, paddingTop: 6 },
        })}
      >
        <Tab.Screen name="DiaryTab" component={DiaryStack} options={{ title: 'Diary' }} />
        <Tab.Screen name="New Memory" component={LocationScreen} />
        <Tab.Screen name="Insights" component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}