import { Col, Form, Button } from "react-bootstrap";
import { useMutation } from '@apollo/client';
import { POST_GROUP } from '../utils/mutations';
import React, { useState } from 'react';
import Auth from '../utils/auth';


const PostGroup = () => {
    const [userFormData, setUserFormData] = useState({name: ''})
    const [postGroup, {error} ] = useMutation(POST_GROUP)
    const [validated] = useState(false)


    
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserFormData({ ...userFormData, [name]:value })
    }

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await postGroup({
                variables: { ...userFormData }
            });
            console.log(data)
        }catch (e) {
            console.log(e)
        }
    

    setUserFormData({
        name: ''
    })
}

return (

<div className='group-form'>
    <h2> Enter a new Group! </h2>

    <Form noValidate validated={validated}onSubmit={handleFormSubmit}>
        <Form.Group>
            <Form.Label column lg={2}>
                Name of your Group
            </Form.Label>
            <Col>
            <Form.Control
            type='text'
            placeholder='Enter your group...'
            onChange={handleInputChange}
            value={userFormData.name}
            required
            />
            </Col>
        </Form.Group>
        <Button
        disabled={!(userFormData.name)}
        variant="sucess"
        type="submit"
        > Submit </Button>
    </Form>

</div>


    )
};

export default PostGroup; 