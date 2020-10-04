import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    isLoading: true,
    cartProducts: [],
  },
  plugins: [
    createPersistedState({
      key: 'cart',
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  getters: {
    isLoading: (state) => state.isLoading,
    cartProducts: (state) => state.cartProducts,
    countProducts: (state) => state.cartProducts.length,
    totalCartPrice: (state) => {
      let cost = 0;
      state.cartProducts.forEach((product) => {
        cost += parseFloat(product.price * product.quantity);
      });
      return cost;
    },
  },
  mutations: {
    isLoading: (state, payload) => {
      state.isLoading = payload;
    },
    addToCart: (state, product) => {
      let isProductInCart = state.cartProducts.some(element => element._id === product._id);
      if (!isProductInCart) {
        product.quantity = 1;
        state.cartProducts.push(product);
      }
    },
    removeFromCart: (state, productToRemove) => {
      const index = state.cartProducts.findIndex(product => product._id === productToRemove._id);
      if (index >= 0) {
        state.cartProducts.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
    addProductUnit: (state, product) => {
      let index = state.cartProducts.findIndex((element) => element.SKU === product.SKU);
      state.cartProducts[index].quantity += 1;
    },
    subProductUnit: (state, product) => {
      let index = state.cartProducts.findIndex((element) => element.SKU === product.SKU);
      if (state.cartProducts[index].quantity > 1) {
        state.cartProducts[index].quantity -= 1;
      }
    },
    resetCart: (state) => { state.cartProducts = []; },
  },
  actions: {
    removeProductFromCart({ commit }, product) {
      commit('removeFromCart', product);
    },
  },
  modules: {

  },
});
