import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { main, footer } from '../../styles/index'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Home ({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Header />
      </View>
      <View style={main.background}>
        <View style={{ flex: 1 }}>
          <Text style={main.subtitle}>Moda Feminina</Text>
          <View style={main.areaProduct}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Vestido') }}>
                <Image style={main.product} source={require('../../images/vestido.webp')} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Casaco') }}>
                <Image style={main.product} source={require('../../images/casacoFeminino.webp')} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Calça') }}>
                <Image style={main.product} source={require('../../images/calcaFeminina.webp')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, top: 5 }}>
          <Text style={main.subtitle}>Moda Masculina</Text>
          <View style={main.areaProduct}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Camisa') }}>
                <Image style={main.product} source={require('../../images/camisaMasculina.webp')} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Casaco Masculino') }}>
                <Image style={main.product} source={require('../../images/casacoMasculino.webp')} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Calça Masculina') }}>
                <Image style={main.product} source={require('../../images/calcaMasculina.webp')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
