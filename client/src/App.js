import React, { Profile } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import "./App.scss";

import Home from './pages/Home'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Messages from "./pages/Messages";


import './components/header';
import './components/footer';
import './components/login';
import './components/message';
import './components/profile';
import './components/register';
import './components/homepage';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client = {client}>
      <BrowserRouter>
    <Container className="pt-5">
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/messages" component={Messages} />
      </Switch>

    </Container>
    </BrowserRouter>
    </ApolloProvider>
  )
}


import React from 'react';
import Footer from './src/footer';
function App() {
  return (
     <Footer />
  );
}
  
export default App;
