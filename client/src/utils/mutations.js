import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login(
    $username: String! 
    $password: String!
    ) {
    login(
        username: $username
        password: $password){
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser(
    $username: String! 
    $email: String! 
    $password: String!
    ) {
    addUser(
        username: $username,
        email: $email,
        password: $password
        ){
        token
        user {
            _id
            username
            email
            favorited
            favorites {
                    favoritesId
                    favoritesBody
                    favorited
                    groups {
                        _id
                        name
                    }
                }
            }
        }
    }
`;

export const POST_GROUP = gql`
mutation postGroup($name: String!) {
    postGroup(name: $name) {
            _id
            name
    }
}`;

export const ADD_FAVORITES = gql`
mutation addFavorites($_Id: ID!)
    {
    addFavorites(_Id: $_Id)
    favorites {
        favoritesId
        favoritesBody
        favorited
        groups {
            _id
            name
        }
    }
}`

export const DELETE_GROUP = gql`
mutation deleteGroup($groupId: ID!){
    deleteGroup(groupId: $groupId){
        _id
        name
        
    }   
}`  
;