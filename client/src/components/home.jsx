import React from 'react';
import pic from './images/batLogo.png';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Header from './header';


export default function Home() {
  const logout = () => {
    Auth.logout();
    window.location.href = '/';
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50'>
        <div>
         <h1 className='logo'>
            <img width='500px' height='400px' src={pic} alt='colored logo' />
          </h1>
        </div>
    
         <div className='logo'>
            <h1 className='text-3xl font-bangers text-center text-red uppercase'>
              <h1>Austin-Bound chat for concerts & live music</h1>
            </h1>
          </div>
      </div>

      <Row className='bg-black justify content-around text-white'>
        <Link to='/login'>
          <Button variant='link'>Login</Button>
        </Link>
        <Link to='/register'>
          <Button variant='link'>Register</Button>
        </Link>
        <Button variant='link' onClick={logout}>
          Logout
        </Button>
      </Row>


    </div>
  );
}

