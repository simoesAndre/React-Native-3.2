import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { main, footer } from '../../styles/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header1 from '../../components/Header1'
import Footer from '../../components/Footer'

function produtoCalcaMasculina ({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Header1 />
      </View>
      <View style={main.align1}>
        <Text />
        <Image style={main.product1} source={require('../../images/calcaMasculina.webp')} />
      </View>
      <View style={main.align2}>
        <Text />
        <Text style={main.productTitle}>Calça Jeans Slim</Text>
        <Text />
        <Text style={main.productSize}>Tamanho</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={main.productSizeOptionArea1}>
            <Text style={main.productSizeOption}>P</Text>
          </TouchableOpacity>
          <TouchableOpacity style={main.productSizeOptionArea2}>
            <Text style={main.productSizeOption}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={main.productSizeOptionArea3}>
            <Text style={main.productSizeOption}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={main.productSizeOptionArea4}>
            <Text style={main.productSizeOption}>GG</Text>
          </TouchableOpacity>
        </View>
        <Text />
        <Text style={main.productPrice}>R$ 90,00</Text>
        <Text />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Icon name='credit-card' size={20} color='black' />
          </TouchableOpacity>
          <Text style={main.productPaymentMethods}>Formas de pagamento</Text>
        </View>
        <Text />
        <TouchableOpacity style={main.button2}>
          <Text style={main.buttonText2}>COMPRAR</Text>
        </TouchableOpacity>
        <Text style={main.shipping}>Frete e prazo</Text>
        <View style={{ flexDirection: 'row', top: 10 }}>
          <TextInput style={main.cep} placeholder='Insira seu CEP' />
          <TouchableOpacity style={main.button3}>
            <Text style={main.buttonText3}>CALCULAR</Text>
          </TouchableOpacity>
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

export default produtoCalcaMasculina
