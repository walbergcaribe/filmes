import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import FilmesInfo from './src/FilmesInfo';
import FilmesList from './src/FilmesList';


const StackNavigator = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName='Filmes'>
        <StackNavigator.Screen component={FilmesList} name='Filmes' />
        <StackNavigator.Screen component={FilmesInfo} name='Filmes Info.' />
      </StackNavigator.Navigator>
    </NavigationContainer >
  )
};

export default App;