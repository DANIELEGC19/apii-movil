'use strict'
import React, { Component } from 'react';
import Form from 'react-native-form';
import TextField from 'react-native-md-textinput';
import {
  Text,
    View,
    ScrollView,
    TouchableHighlight,
    Alert,
    StyleSheet
} from 'react-native';



class vehiculosView extends Component {
    render(){
        return(
     <View>
     <ScrollView>
     <Text style={styles.title}> Crear Nuevo Vehiculo</Text>
     <TextField label={'Marca'} highlightColor={'#00BCD4'} name={'veMarca'}/>
     <TextField label={'Modelo'} highlightColor={'#00BCD4'} name={'veModelo'}/>
     <TextField label={'Color'} highlightColor={'#00BCD4'} name={'veColor'}/>
     <TextField label={'Placa'} highlightColor={'#00BCD4'} name={'vePlaca'}/>
     <TextField label={'Precio'} highlightColor={'#00BCD4'} name={'vePrecio'}/>
     <TextField label={'Año'} highlightColor={'#00BCD4'} name={'veAño'}/>
     <TextField label={'Marca'} highlightColor={'#00BCD4'} name={'veMarca'}/>
     </ScrollView>
     </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    },
    title:{
        fontSize: 25,
        marginTop: 50
    }
})


module.exports = vehiculosView;
