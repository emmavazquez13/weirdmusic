import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Register = () => {
	const [userFormData, setUserFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [validated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [addUser, { error, data }] = useMutation(ADD_USER);

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

	//export default function Register(props) {
	//const [variables, setVariables] = useState({
	//email: "",
	//username: "",
	//password: "",
	//confirmPassword: "",
	//});
	//const [errors, setErrors] = useState({})

	//const [registerUser, { loading }] = useMutation(REGISTER_USER, {
	//update: (_, __) => props.history.push('/login'),
	//onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors)
	//})

	//const submitRegisterForm = (e) => {
	//e.preventDefault();

	//registerUser({ variables });
	//};

	return (
		<Row className='bg-white py-5 justify-content-center'>
			<Col sm={8} md={6} lg={4}>
				<h1 className='text-center'>Register</h1>
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
						<Form.Label htmlFor='email'>{'Email address'}</Form.Label>
						<Form.Control
							type='email'
							value={userFormData.email}
							name='email'
							onChange={handleInputChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor='username'>{'Username'}</Form.Label>
						<Form.Control
							type='text'
							value={userFormData.username}
							name='username'
							onChange={handleInputChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor='password'>{'Password'}</Form.Label>
						<Form.Control
							type='password'
							value={userFormData.password}
							name='password'
							onChange={handleInputChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor='confirmPassword'>
							{'Confirm password'}
						</Form.Label>
						<Form.Control
							type='password'
							value={userFormData.confirmPassword}
							name='is-invalid'
							onChange={handleInputChange}
							required
						/>
					</Form.Group>

					<div className='text-center'>
						<Button
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
							Submit
						</Button>
						<br />
						<small>
							{' '}
							Already have an account? <Link to='/login'>Login</Link>
						</small>
					</div>
				</Form>
			</Col>
		</Row>
	);
};

export default Register;
