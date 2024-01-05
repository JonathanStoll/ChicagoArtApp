/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {Home, Details, Favs} from './screens';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  let persisitor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persisitor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Favs" component={Favs} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
