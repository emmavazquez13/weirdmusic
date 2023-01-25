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
            <h1 className='text-3xl font-serif text-center text-red uppercase'>
              <h1>Austin-Bound chat for concerts & live music</h1>
            </h1>
          </div>
      </div>

      <div className='h-45 grid grid-cols-3 gap-4 content-center'>
      <Link to='/login'>
      <Button
              className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red'
              variant='link'
              type='login'            >
              Login
            </Button>
        </Link>
        <Link to='/register'>
      <Button
              className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red'
              variant='link'
              type='Register'            >
              Register
            </Button>
        </Link>
        <Button 
          className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-gray focus:outline-none focus:bg-red'
          variant='link' 
          onClick={logout}>
          Logout
        </Button>
      </div>


    </div>
  );
}

