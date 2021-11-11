import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Categorias from './src/pages/Categorias'
import Home from './src/pages/Home'
import produtoCalcaFeminina from './src/pages/produtoCalcaFeminina'
import produtoCalcaMasculina from './src/pages/produtoCalcaMasculina'
import produtoCamisaMasculina from './src/pages/produtoCamisaMasculina'
import produtoCasacoFeminino from './src/pages/produtoCasacoFeminino'
import produtoCasacoMasculino from './src/pages/produtoCasacoMasculino'
import produtoVestido from './src/pages/produtoVestido'
import sobreALoja from './src/pages/sobreALoja'

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Vestido' component={produtoVestido} />
        <Stack.Screen name='Casaco' component={produtoCasacoFeminino} />
        <Stack.Screen name='Calça' component={produtoCalcaFeminina} />
        <Stack.Screen name='Camisa' component={produtoCamisaMasculina} />
        <Stack.Screen name='Casaco Masculino' component={produtoCasacoMasculino} />
        <Stack.Screen name='Calça Masculina' component={produtoCalcaMasculina} />
        <Stack.Screen name='Categorias' component={Categorias} />
        <Stack.Screen name='Sobre a Loja' component={sobreALoja} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
