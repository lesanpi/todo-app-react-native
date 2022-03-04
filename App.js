import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
          title: 'Task App',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#222f3e',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: { color: "#fff" },
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('TaskForm')}>
              <Text style={{ color: '#fff', fontSize: 30, fontWeight: '900' }}>+</Text>
            </TouchableOpacity>
          )
        })} />
        <Stack.Screen name="TaskForm" component={TaskFormScreen}
          options={{
            title: "Create a Task",
            headerStyle: {
              backgroundColor: '#222f3e',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: { color: "#fff" },
            headerShadowVisible: false,
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

