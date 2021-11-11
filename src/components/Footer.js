import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { footer } from '../styles/index'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Footer extends Component {
  render () {
    return (
      <View style={footer.background}>
        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '#E6E6FA' }}>
          <View style={{ flex: 2 }}>
            <Text style={footer.description3}>Rua Eusébio 10</Text>
            <Text style={footer.description3}>Centro, Cidade das Águas</Text>
            <Text />
            <Text style={footer.description3}>Aberta de segunda a</Text>
            <Text style={footer.description3}>sexta das 10:00 às 21:00</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image style={footer.store} source={require('../images/rodape.webp')} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={footer.description4}>Siga-nos</Text>
          <View style={{ flex: 1, flexDirection: 'row', top: 12 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Icon style={footer.iconMenu} name='twitter' size={32} />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Icon style={footer.iconMenu} name='facebook-official' size={32} />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Icon style={footer.iconMenu} name='pinterest' size={32} />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, left: 25 }}>
              <Icon style={footer.iconMenu} name='instagram' size={32} />
            </View>
            <View style={{ flex: 1, left: 7 }}>
              <Icon style={footer.iconMenu} name='snapchat-ghost' size={32} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
