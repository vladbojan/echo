import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink, split } from 'apollo-link'
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-client-preset'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

import Navigation from './components/Navigation'
import HomeContainer from './components/HomeContainer'

import 'tachyons'
import './index.css'

import {AUTH_TOKEN} from './constants/authToken'


const httpLink = new HttpLink({ uri: 'https://echo-ladder.eu/' })

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const tokenValue = localStorage.getItem(AUTH_TOKEN)
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
    },
  })
  return forward(operation)
})

// authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink)

const wsLink = new WebSocketLink({
  uri: `wss://echo-ladder.eu/`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
    },
  },
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLinkAuth,
)

// apollo client setup
const client = new ApolloClient({
  link: ApolloLink.from([link]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <Navigation/>
        <HomeContainer/>
      </Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
