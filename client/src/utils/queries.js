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
                groupId
                name
                totalMessages
                lastModified
            }
        }
    }`

export const QUERY_GROUP = gql` 

    groups {
        groupId
        name
        totalMessages
        lastModified
    }`

export const QUERY_FAVORITES = gql`
    favorites {
        favoritesId
        favorited
        groups {
            groupId
            name
            totalMessages
            lastModified
        }
    }`

export const QUERY_GENRE = gql`
    genre {
        genreId
        newgroup
        groups {
            groupId
            name
            totalMessages
            lastModified
        }
    }
}`;