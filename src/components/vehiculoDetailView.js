'use strict'
import React, { Component } from 'react'

import {
  Text,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet,
    ListView,
    Image
} from 'react-native'

class vehiculoDetailView extends Component {
    constructor(props){
        super(props)
        this.passProps = this.props.route.passProps;
    }
    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.title}>{this.passProps.vehiculos.marca}</Text>
            <Text style={styles.description}> Modelo: {this.passProps.vehiculos.modelo}</Text>
            <Text style={styles.description}> Color: {this.passProps.vehiculos.color}</Text>
            <Text style={styles.description}> Placa: {this.passProps.vehiculos.placa}</Text>
            <Text style={styles.description}> Precio: {this.passProps.vehiculos.precio}</Text>
            <Text style={styles.description}> Año: {this.passProps.vehiculos.ano}</Text>
            <Text style={styles.description}> Tipo: {this.passProps.vehiculos.tipo}</Text>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 63,
        flex: 1,
        alignItems:'center',
        backgroundColor: '#F5FCFF'
    },
    title:{
        fontSize: 23,
        color: '#007AFF'
    },
    description:{
        marginTop: 10,
        fontSize: 16,
        color:'#454545'
    },
    modified:{
        marginTop: 10,
        fontSize: 16
    },
    image: {
        alignSelf: 'stretch',
        height: 300
    }
})

module.exports = vehiculoDetailView
