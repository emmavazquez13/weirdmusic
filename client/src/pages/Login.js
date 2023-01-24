import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' })
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);
  
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const {name, value } = event.target;
    setUserFormData({...userFormData, [name]: value })
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

    Auth.login(data.login.token);
    } catch (e) {
      console.error(e)
    }

    setUserFormData({
      username: '',
      password: '',
    })
  }


//export default function Register(props) {
  //const [variables, setVariables] = useState({
    //username: "",
    //password: "",
  //});
  //const [errors, setErrors] = useState({})

  //const [loginUser, { loading }] = useLazyQuery(LOGIN_USER, {
    //onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),
    //onCompleted(data){
       // localStorage.setItem('token', data.login.token)
       // props.history.push('/')
    //},
  //})

 //const submitLoginForm = (e) => {
   // e.preventDefault();

    //loginUser({ variables });
  //};

  return (
    <Row className="bg-white py-5 justify-content-center">
      <Col sm={8} md={6} lg={4}>
        <h1 className="text-center">Login</h1>
        <Form noValidate validated={validated}onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong!
        </Alert>
          <Form.Group>
          <Form.Label htmlFor='email'>
              {'Username'}
            </Form.Label>
            <Form.Control
              type="text"
              value={userFormData.username}
              name='username'
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
          <Form.Label htmlFor='password'>
              {'Password'}
            </Form.Label>
            <Form.Control
              type="password"
              value={userFormData.password}
              name='password'
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        

          <div className="text-center">
          <Button variant="success" type="submit" disabled={!(userFormData.username && userFormData.password)}>
             Submit
            </Button>
            <br/>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;