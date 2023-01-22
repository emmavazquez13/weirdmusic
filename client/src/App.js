import React, { Profile } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ApolloProvider from "./ApolloProvider";

import "./App.scss";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages"


function App() {
  return (
    <ApolloProvider>
      <BrowserRouter>
    <Container className="pt-5">
      <Switch>
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

export default App;
