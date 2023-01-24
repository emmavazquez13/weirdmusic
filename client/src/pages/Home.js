import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Home() {
  const logout = () => {
    Auth.logout();
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Hello. You are logged in</h1>

      <Row className='bg-white justify content-around'>
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
