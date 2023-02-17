import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Store/store';
import { NavigationContainer , StackActions, NavigationActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialView } from './src/Components/Views/InitialView';
import { Home } from './src/Components/Views/Home/Home';
import { CameraClass } from './src/Components/Views/Camera/CameraClass';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={InitialView}  options={{ headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
        <Stack.Screen name="Camera" component={CameraClass} options={{ headerShown: false}} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
