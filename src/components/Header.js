import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { header } from '../styles/index'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Header extends Component {
  render () {
    return (
      <View style={header.background}>
        <View style={header.areaMenu}>
          <View style={{ flex: 1 }}>
            <Icon style={header.iconMenu} name='menu' size={32} color='white' />
          </View>
          <View style={{ flex: 6 }}>
            <Text style={header.title}>BAZZAAR</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Icon style={header.iconCart} name='shopping-cart' size={32} color='white' />
          </View>
          <View style={{ flex: 1 }}>
            <Icon style={header.iconSearch} name='search' size={32} color='white' />
          </View>
        </View>
        <View style={{ flex: 5 }}>
          <Image style={header.banner} source={require('../images/banner.webp')} />
          <Text style={header.description1}>Até 50% de desconto</Text>
          <View style={header.areaButton}>
            <TouchableOpacity style={header.button}>
              <Text style={header.textButton}>COMPRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
