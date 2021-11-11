import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const header = StyleSheet.create({
  background: {
    width: width,
    flex: 1
  },
  areaMenu: {
    flex: 1,
    backgroundColor: '#424242',
    flexDirection: 'row',
    height: 38
  },
  iconMenu: {
    left: 5,
    top: 3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    top: 5
  },
  iconCart: {
    alignItems: 'center',
    top: 3
  },
  iconSearch: {
    top: 3
  },
  banner: {
    width: 360,
    height: 128
  },
  description1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  areaButton: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#ff6347',
    width: 100,
    height: 32,
    justifyContent: 'center'
  },
  textButton: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
})

const main = StyleSheet.create({
  // Estilização da página Home //
  background: {
    width: width,
    flex: 1,
    top: 10
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333'
  },
  areaProduct: {
    flexDirection: 'row'
  },
  product: {
    width: 85,
    height: 90
  },
  button: {
    width: 70,
    height: 25,
    backgroundColor: '#616161',
    justifyContent: 'center',
    borderRadius: 3
  },
  textButton: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },

  // Estilização das páginas de produto //
  align1: {
    alignItems: 'center'
  },
  align2: {
    left: 20
  },
  product1: {
    width: 225,
    height: 300
  },
  productTitle: {
    fontSize: 30
  },
  productSize: {
    fontSize: 22,
    bottom: 5
  },
  productSizeOptionArea1: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center'
  },
  productSizeOptionArea2: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    left: 5,
    justifyContent: 'center'
  },
  productSizeOptionArea3: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    left: 10,
    justifyContent: 'center'
  },
  productSizeOptionArea4: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    left: 15,
    justifyContent: 'center'
  },
  productSizeOption: {
    textAlign: 'center',
    fontSize: 20
  },
  productPrice: {
    fontSize: 22
  },
  productPaymentMethods: {
    left: 10
  },
  button2: {
    backgroundColor: 'black',
    height: 54,
    width: 320,
    justifyContent: 'center'
  },
  buttonText2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  },
  shipping: {
    top: 5
  },
  cep: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 36,
    width: 185
  },
  button3: {
    backgroundColor: 'black',
    height: 36,
    width: 120,
    left: 15,
    justifyContent: 'center'
  },
  buttonText3: {
    color: 'white',
    textAlign: 'center'
  },

  // Estilização da página Categorias //
  categoryImage: {
    width: 90,
    height: 90,
    borderRadius: 100
  },
  categoryDescription: {
    fontSize: 20,
    color: '#4F4F4F',
    top: 30,
    left: 10
  },

  // Estilização da página sobreALoja //
  storeDescription: {
    textAlign: 'center',
    fontSize: 15,
    width: 300,
    left: 10
  }
})

const footer = StyleSheet.create({
  background: {
    width: width,
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#9e9e9e'
  },
  description3: {
    color: '#333333',
    textAlign: 'center',
    top: 8,
    fontSize: 13
  },
  store: {
    width: 80,
    height: 122
  },
  description4: {
    color: '#333333',
    textAlign: 'center',
    top: 8,
    fontSize: 13,
    fontWeight: 'bold'
  },
  description5: {
    color: '#A9A9A9'
  }
})

export { header, main, footer }
