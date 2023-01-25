import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//import Home from './pages/Home';
// import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import Header from './components/header';


const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className='pt-5'>
        <Router>
          <>
            <Routes>
              <Route exact path='/' element={<Home />} />

              <Route exact path='/register' element={<Register />} />

              <Route path='/login' element={<Login />} />

              <Route path='/home' element={<Home />} />

              <Route path='/header' element={<Header />} />
             
              
              {/* <Route path='/profile' element={<Profile />} /> */}
            </Routes>
          </>
        </Router>
      </Container>
    </ApolloProvider>
  );
}

export default App;
