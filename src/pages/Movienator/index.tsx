import React from 'react';

import Grid from '@material-ui/core/Grid'

import Movie from '../../components/Movie';

import { Carousel, Container, Content, MovieList } from './styles';
import movies from '../../movies.js';


const Home: React.FC = () => {

  return (
    <>
      <Carousel />
      <Container>
        <Content>
          <h1>Movienator</h1>
          <MovieList>
            <Grid container spacing={0}>
              {movies && movies.map(movie => {
                return (
                  <Grid key={movie.id} item lg={6} sm={12}>
                    <Movie movie={movie} />
                  </Grid>
                )
              })}
            </Grid>
          </MovieList>
        </Content>

      </Container>
    </>
  )
};

export default Home;
