import gql from 'graphql-tag';

export const getMovies = gql`
{        
    movies(limit:50, rating:7) {
        id
        title
        rating
        medium_cover_image

    }
}
`;