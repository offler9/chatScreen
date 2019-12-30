import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import Main from './screen/Main'
import Chat from './screen/Chat'
import { createAppContainer } from 'react-navigation'

let navigator = createStackNavigator({
  //Main: { screen: Main },
   Chat: { screen: Chat },
})
let AppCon = createAppContainer(navigator)

export default class App extends React.Component {
  render(){
  return (
    
     <AppCon/>
   
  )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
