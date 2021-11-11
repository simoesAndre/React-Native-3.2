import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { main, footer } from '../../styles/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header1 from '../../components/Header1'
import Footer from '../../components/Footer'

function Categorias ({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Header1 />
      </View>
      <View>
        <Text />
        <TouchableOpacity style={{ left: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={main.categoryImage} source={require('../../images/categorias/feminino.webp')} />
            <Text style={main.categoryDescription}>Feminino</Text>
          </View>
        </TouchableOpacity>
        <Text />
        <TouchableOpacity style={{ left: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={main.categoryImage} source={require('../../images/categorias/masculino.webp')} />
            <Text style={main.categoryDescription}>Masculino</Text>
          </View>
        </TouchableOpacity>
        <Text />
        <TouchableOpacity style={{ left: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={main.categoryImage} source={require('../../images/categorias/infantil.webp')} />
            <Text style={main.categoryDescription}>Infantil</Text>
          </View>
        </TouchableOpacity>
        <Text />
        <TouchableOpacity style={{ left: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={main.categoryImage} source={require('../../images/categorias/calcados.webp')} />
            <Text style={main.categoryDescription}>Calçados</Text>
          </View>
        </TouchableOpacity>
        <Text />
        <TouchableOpacity style={{ left: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={main.categoryImage} source={require('../../images/categorias/relogio.webp')} />
            <Text style={main.categoryDescription}>Relógios</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text />
        <Text />
        <Footer />
      </View>
      <View style={{ flexDirection: 'row', flex: 1, top: 5 }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('Home') }}>
            <Icon name='home' size={32} color='#A9A9A9' />
            <Text style={footer.description5}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('Categorias') }}>
            <Icon name='menu' size={32} color='#A9A9A9' />
            <Text style={footer.description5}>Categorias</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('Sobre a Loja') }}>
            <Icon name='store' size={32} color='#A9A9A9' />
            <Text style={footer.description5}>Sobre a Loja</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text />
      </View>
    </ScrollView>
  )
}

export default Categorias
