import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import pageReducer from './reducers/pageReducer';
import AppContainer from './containers/AppContainer';

const apolloClient = new ApolloClient();

const store = createStore(
  combineReducers({
    page: pageReducer,
    apollo: apolloClient.reducer(),
  }),
  {},
  compose(
      applyMiddleware(apolloClient.middleware()),
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

ReactDOM.render(
    <ApolloProvider client={ apolloClient } store={store}>
        <AppContainer />
    </ApolloProvider>, 
    document.getElementById('root'));