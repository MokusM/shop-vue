import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{
        id: 1,
        manId: 3,
        name: 'Samsung S7 Edge',
        price: 659,
        image: require('@/assets/1.png'),
        description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
        manufacturer: {
          id: 3,
          name: 'Samsung'
        }
      },
      {
        id: 2,
        manId: 1,
        name: 'iPhone 7',
        price: 769,
        image: require('@/assets/2.jpg'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
        manufacturer: {
          id: 1,
          name: 'Apple'
        }
      },
      {
        id: 3,
        name: 'Xperia XZ',
        price: 649,
        image: require('@/assets/3.jpg'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
        manufacturer: {
          id: 2,
          name: 'Sony'
        }
      },
      {
        id: 4,
        name: 'Xperia XZ',
        price: 649,
        image: require('@/assets/3.jpg'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
        manufacturer: {
          id: 2,
          name: 'Sony'
        }
      }
    ],
    inCart: []
  },
  getters: {
    getProducts: state => state.products,
    productsById(state) {
      return productsId => {
        return state.products.find(product => product.id === productsId)
      }
    },
    inCart: state => state.inCart,
    getInCart: state => state.inCart,
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeInCart (store, inCart) {
      store.commit('removeInCart', inCart)
    },
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    removeInCart (state, inCart) {
      var inCart = state.inCart
      inCart.splice(inCart.indexOf(inCart), 1)
    },
  },
})
