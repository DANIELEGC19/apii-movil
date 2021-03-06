/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';

 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
     Navigator,
     TouchableHighlight
 } from 'react-native';

 var NavigatorBarRouteMapper = {
     LeftButton: function(route, navigator, index){
         if(index==0){
             return null
         }
         return (
             <TouchableHighlight onPress={() => {
                     if(index>0){
                         navigator.pop();
                     }
                 }}>
                 <Text style={{marginTop:30, marginLeft: 20, color: '#007AFF'}}>Atras</Text>

                 </TouchableHighlight>
         )
     },
     RightButton: function(route, navigator, index){
         return null;
     },
     Title: function(route, navigator, index){
          if(route.name == 'Login' || route.name == 'Dashboard'){
             return null
         }
         return(
             <Text style={{marginTop: 30 , color: '#007AFF', marginLeft: 60}}>{route.name} </Text>
         )
     }
 }


 const Login = require('./src/components/loginView');
 const Tabs = require('./src/components/tabs');
 const VehiculoDetail = require('./src/components/vehiculoDetailView');

export default class App extends Component {

  renderScene(route,navigator){
      switch(route.name){
          case 'Login':
              return(
                  <Login {...route.props}  navigator={navigator} route={route}></Login>
              )
          case 'Dashboard':
              return(
                  <Tabs {...route.props} navigator={navigator} route={route}></Tabs>
              )

          case 'Detalles':
            return(
                <VehiculoDetail {...route.props} navigator={navigator} route={route}></VehiculoDetail>
            )
      }
  }

  render() {
      return (
            <Navigator style={styles.bar}
           initialRoute={{name: 'Login'}}
           renderScene={this.renderScene}
           configureScene={(route) => {
             if(route.sceneConfig){
               return route.sceneConfig;
             }
             return Navigator.SceneConfigs.FloatFromRight
           }}
           navigationBar={
             <Navigator.NavigationBar
              routeMapper={NavigatorBarRouteMapper}/>}
        />
          );
      }
  }
const styles = StyleSheet.create({

})

AppRegistry.registerComponent('App', () => App);
