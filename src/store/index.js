import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLoading: true,
    cartProducts: []
  },
  getters: {
    isLoading: state => state.isLoading,
    cartProducts: state => state.cartProducts
  },
  mutations: {
    isLoading: (state, payload) => state.isLoading = payload,
    addToCart: (state, product) => state.cartProducts.push(product),
    removeFromCart: (state, index) => {
      this.product.splice(index, 1);
    },
    clearCart: (state, payload) => state.cartProducts = []
  },
  actions: {

  },
  modules: {

  }
});