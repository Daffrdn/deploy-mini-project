import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

import { domain, clientId } from '../auth_config';
import { Auth0Plugin } from './auth';

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

Vue.config.productionTip = false

// HTTP connection to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://steady-ape-30.hasura.app/v1/graphql',
})

// Create the subscription websocket link
const wsLink = new WebSocketLink({
  uri: 'wss://steady-ape-30.hasura.app/v1/graphql',
  options: {
    reconnect: true,
  },
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

// Install the vue plugin like before
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })

  
new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import router from './router';
// import store from './store';
// import axios from 'axios';

// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'https://vast-atoll-03704.herokuapp.com/';

// Vue.config.productionTip = false
// new Vue({
//   store,
//   router,
//   render: h => h(App)
// }).$mount('#app')
