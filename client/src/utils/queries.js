import { gql } from '@apollo/client'

export const GET_ME = gql `
{
    me {
        _id
        username
        email
        favorited
        favorites {
            favoritesId
            favorited
            groups {
                _Id
                name
            }
        }
    }
}`
export const QUERY_GROUP = gql` 
query allGroups {
    groups {
        _id
        name
    }
}`
export const QUERY_FAVORITES = gql`
{
    favorites {
        favoritesId
        favorited
        groups {
            _id
            name
        }
    }
}`
export const QUERY_GENRE = gql`
{
    genre {
        genreId
        newgroup
        groups {
            _Id
            name
        }
    }
}`;