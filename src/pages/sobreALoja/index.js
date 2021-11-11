import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { main, footer } from '../../styles/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header1 from '../../components/Header1'
import Footer from '../../components/Footer'

function sobreALoja ({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Header1 />
      </View>
      <View style={{ width: 320, borderWidth: 1, borderColor: '#4F4F4F', left: 20, top: 10 }}>
        <Text />
        <Text style={main.storeDescription}>
          A Bazzar é uma loja segura e confiável. Trabalhamos há mais de 8 anos no mercado
          e atendemos mais de 5.000 clientes nesse período.
        </Text>
        <Text style={main.storeDescription}>
          Prezamos sempre pelo bom atendimento, cordialidade e responsabilidade para com os nossos clientes.
        </Text>
        <Text style={main.storeDescription}>
          Os nossos pagamentos via boleto e cartão de crédito são intermediados por instituições de grande renome
          e responsabilidade. Em nenhum momento temos acesso ás informações do seu cartão de crédito, por exemplo.
        </Text>
        <Text style={main.storeDescription}>
          As nossas entregas são realizadas pelos Correios. Todos os nossos envios são feitos com segurança.
          Caso haja algum extravio da sua compra, todo o valor pago será devolvido.
        </Text>
        <Text style={main.storeDescription}>
          São por esses e outros motivos que você pode sim confiar.
        </Text>
        <Text style={main.storeDescription}>
          Estamos preparados para atendê-lo(a) da melhor forma possível.
        </Text>
        <Text />
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

export default sobreALoja
