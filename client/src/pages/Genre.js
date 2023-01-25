import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_GROUP } from '../utils/queries';
import Auth from '../utils/auth';
import Collapsible from 'react-collapsible';
import DeleteGroup from '../components/DeleteGroup';
import PostGroup  from '../components/PostGroup';
import GroupList from '../components/GroupList';

const Genre = () => {
    const { loading, data } = useQuery(QUERY_GROUP);
    const groups = data?.groups || [];

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }


    

return (

    
    <div className= 'Genre'>

    
    <Collapsible trigger='Metal'>
    <Container >
        {loading ? (
            <div>loading...</div>
        ): (
            <GroupList
                groups={groups}
                title="here are the groups!"/>
        )}
            <Routes>
                <Route exact path='/postgroup' element={<PostGroup />}>
                    Create a Group!
                    </Route>

                <Route exact path='/deletegroup' element={<DeleteGroup />}>
                    Delete a Group!
                </Route>
            </Routes>
        </Container>
    </Collapsible>

    <Collapsible trigger='Rock'>
    <Container>
        <p> ROCK </p>
        </Container>  
    </Collapsible>


    </div>
)

}
 
export default Genre;