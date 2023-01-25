import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import pic from './images/batLogo.png';

export default function Register() {
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    console.log(userFormData);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <div className='flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50'>
        <div>
          <a href='/'>
            <h3 className='text-4xl font-bold text-purple-600'>
              <img width='300px' height='300px' src={pic} alt='colored logo' />
            </h3>
          </a>
        </div>
        <div className='w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg'>
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant='danger'
            >
              Something went wrong with your signup!
            </Alert>
            <Form.Group>
              <Form.Label
                className='block text-sm font-medium text-gray-700 undefined'
                htmlFor='email'
              >
                {'Email address'}
              </Form.Label>
              <Form.Control
                className='block w-full mt-1 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                type='email'
                value={userFormData.email}
                name='email'
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                className='block text-sm font-medium text-gray-700 undefined'
                htmlFor='username'
              >
                {'Username'}
              </Form.Label>
              <Form.Control
                className='block w-full mt-1 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                type='text'
                value={userFormData.username}
                name='username'
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                className='block text-sm font-medium text-gray-700 undefined'
                htmlFor='password'
              >
                {'Password'}
              </Form.Label>
              <Form.Control
                className='block w-full mt-1 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                type='password'
                value={userFormData.password}
                name='password'
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                className='block text-sm font-medium text-gray-700 undefined'
                htmlFor='confirmPassword'
              >
                {'Confirm password'}
              </Form.Label>
              <Form.Control
                className='block w-full mt-1 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                type='password'
                value={userFormData.confirmPassword}
                name='is-invalid'
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <div className='text-center'>
              <Button
                className='inline-flex items-center mt-3 px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false'
                variant='success'
                type='submit'
                disabled={
                  !(
                    userFormData.username &&
                    userFormData.email &&
                    userFormData.password
                  )
                }
              >
                Register
              </Button>
              <br />
              <small className='text-sm text-gray-600 underline hover:text-gray-900'>
                {' '}
                Already have an account? <Link to='/login'>Login</Link>
              </small>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
