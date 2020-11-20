import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {ApolloClient, ApolloClientOptions} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import VueApollo from 'vue-apollo'
import Paginate from 'vuejs-paginate'


Vue.config.productionTip = false
Vue.component('Paginate', Paginate)

Vue.use(VueApollo)

export const bus = new Vue();

const httpLink = new HttpLink({
  uri: 'https://fleet-marmoset-99.hasura.app/v1/graphql'
})

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  apolloProvider,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
