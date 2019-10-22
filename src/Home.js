import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getMovies } from './Queries';
import styled from 'styled-components';
import Movie from './Movie';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;
const Home = () => 
    {
    const { loading, error, data } = useQuery(getMovies);
    if(loading) return "Loading...";
    if(error) return "WTF?";
    return <Container>
                {data.movies.map(movie => (
                <Movie id = {movie.id} key = {movie.id} poster = {movie.medium_cover_image} title = {movie.title} rating = {movie.rating}>
                </Movie>
                ))}
    </Container>;
    };

export default Home;