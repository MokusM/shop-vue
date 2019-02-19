let inCart = window.localStorage.getItem('inCart');
let cartCount = window.localStorage.getItem('cartCount');
import Vue from 'vue'
import Vuex from 'vuex'
import modals from './modals'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      token: null,
      userLogin: '',
      userEmail: ''
    },
    products: [{
        id: 1,
        name: 'Samsung S7 Edge',
        price: 659,
        image: require('@/assets/1.png'),
        company: 'Samsung'
      },
      {
        id: 2,
        name: 'iPhone 7',
        price: 769,
        image: require('@/assets/2.jpg'),
        company: 'Apple'
      },
      {
        id: 3,
        name: 'Xperia XZ',
        price: 649,
        image: require('@/assets/3.jpg'),
        company: 'Sony'
      },
      {
        id: 4,
        name: 'Xperia Z',
        price: 349,
        image: require('@/assets/3.jpg'),
        company: 'Sony2'
      },
      {
        id: 5,
        name: 'iPhone 7',
        price: 769,
        image: require('@/assets/2.jpg'),
        company: 'Apple'
      },
      {
        id: 6,
        name: 'Xperia XZ',
        price: 649,
        image: require('@/assets/3.jpg'),
        company: 'Sony'
      },
      {
        id: 7,
        name: 'Xperia Z',
        price: 949,
        image: require('@/assets/3.jpg'),
        company: 'Sony2'
      },
      {
        id: 8,
        name: 'iPhone 7',
        price: 869,
        image: require('@/assets/2.jpg'),
        company: 'Apple'
      },
      {
        id: 9,
        name: 'Xperia XZ',
        price: 9949,
        image: require('@/assets/3.jpg'),
        company: 'Sony'
      },
      {
        id: 10,
        name: 'Xperia Z',
        price: 149,
        image: require('@/assets/3.jpg'),
        company: 'Sony15'
      }
    ],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    inCart: inCart ? JSON.parse(inCart) : []    
  },
  getters: {    
    //inCart: state => state.inCart,    
  },
  actions: {
    addToCart(context, invId) {
      context.commit('addToCart', invId);
    },
    removeFromCart(store, invId) {
      store.commit('removeFromCart', invId)
    },
    removeAllInCart(store, inCart) {
      store.commit('removeAllInCart', inCart)
    },
    quantityMinus(store, invId) {
      store.commit('quantityMinus', invId);
    },
    quantityPlus(store, invId) {
      store.commit('quantityPlus', invId);
    }
  },
  mutations: {
    addToCart(state, invId) {
      let found = state.inCart.find(product => product.id === invId.id);
      if (found) {
        found.quantity++;
        found.totalPrice = found.quantity * found.price;
      } else {
        state.inCart.unshift(invId);
        Vue.set(invId, 'quantity', 1);
        Vue.set(invId, 'totalPrice', invId.price);
      };
      state.cartCount++;
      this.commit('saveCart');
    },
    removeFromCart(state, item) {
      state.inCart = state.inCart.filter(product => product !== item);
      state.cartCount -= item.quantity;
      this.commit('saveCart');
    },
    removeAllInCart(state) {
      state.inCart = [];
      state.cartCount = 0;
      this.commit('saveCart');
    },
    quantityMinus(state, invId) {
      let found = state.inCart.find(product => product.id === invId.id);
      if (found.quantity > 1) {
        found.quantity--;        
        found.totalPrice = found.quantity * found.price;
        state.cartCount--;
      };
      this.commit('saveCart');
    },
    quantityPlus(state, invId) {
      let found = state.inCart.find(product => product.id === invId.id);
      found.quantity++;
      found.totalPrice = found.quantity * found.price;
      state.cartCount++;
      this.commit('saveCart');
    },
    saveCart(state) {
      window.localStorage.setItem('inCart', JSON.stringify(state.inCart));
      window.localStorage.setItem('cartCount', state.cartCount);
    },
  },
  modules: { modals }
})
