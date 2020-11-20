import Vue from 'vue'
import Vuex from 'vuex'
import { apolloClient } from '../graphql/client'
import getproductsquery from '../graphql/getproducts.query.gql'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        isLoading: false,
        error: null
    },
    mutations: {
        getProducts(state, payload) {
            state.products = payload;
        },
        toggleLoading(state, payload) {
            state.isLoading = payload;
        },
        setError(state, payload) {
            state.error = payload;
        },
    },
    actions: {
        getProducts({ commit }) {
            commit('toggleLoading', true);
            apolloClient
                .query({
                    query: getproductsquery
                })
                .then(res => commit('getProducts', res.data.products))
                .catch(err => commit('setError', err))
                .finally(() => commit('toggleLoading', false));
        },

    },
    getters: {
        products: s => s.products,
        productById: s => id => s.products.filter(t => t.id === id)
    },
})
