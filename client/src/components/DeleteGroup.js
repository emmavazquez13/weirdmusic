import React from 'react';
import {  Container, Card, Button } from 'react-bootstrap';
import { QUERY_GROUP } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { DELETE_GROUP } from '../utils/mutations';
//import { deleteGroupId } from '../utils/localStorage';


const DeleteGroup = () => {
    const { loading, data } = useQuery(QUERY_GROUP);
    const [removeGroup, { error }] = useMutation(DELETE_GROUP);
  
    const groups = data?.groups || [];
  
    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    const handleDeleteGroup = async (groupId) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        const { data }= await removeGroup({
          variables: {groupId},
        });
        console.log(data)
    }catch (e) {
        console.log(e)
    }
};
        // upon success, remove book's id from localStorage
    //    deleteGroupId(groupId);
      //} catch (err) {
        //console.error(err);
     // }
    //};
  
    // if data isn't here yet, say so
    if (loading) {
      return <h2>LOADING...</h2>;
    }
  
    return (
      <>

          <Container>
            <h1> Here are all of the Groups! </h1>
          </Container>

        <Container>
          <h2>
            {groups.length `Viewing all created groups`} 
          </h2> 

                {groups.map((groups) => {
                    return (
                        <Card key={groups.groupId}>
                            <Card.Body>
                                <Card.Name>{groups.name}</Card.Name>
                                <Button className='btn-block btn-sucess' onClick={() => handleDeleteGroup(groups.groupId)}>
                                    Delete Group
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })}

        </Container>
      </>
    );
  };
  
  export default DeleteGroup;