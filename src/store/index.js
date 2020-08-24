import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    test: 'xxx',
    isLoading: true,
    cartProducts: [],
  },
  getters: {
    isLoading: (state) => state.isLoading,
    cartProducts: (state) => state.cartProducts,
    countProducts: (state) => state.cartProducts.length,
  },
  mutations: {
    isLoading: (state, payload) => {
      state.isLoading = payload;
    },
    addToCart: (state, product) => {
      state.cartProducts.push(product);
    },
    removeFromCart: (state, index) => {
      this.product.splice(index, 1);
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
  actions: {

  },
  modules: {

  },
});
