import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AcUnitSharpIcon from '@material-ui/icons/AcUnitSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Container } from './style'

interface MovieProps {
  id: number;
  title: string;
  ratingA: number;
  ratingB: number;
  posterPath: string;
}

interface IMovie {
  movie: MovieProps
}

const StyledRating = withStyles({
  iconFilled: {
    color: '#84A6F7',
  },
  iconHover: {
    color: '#C0E8F7',
  },
})(Rating);

const StyledRating2 = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const Movie: React.FC<IMovie> = ({ movie }) => {
  return (
    <Container>
      <img src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt="" />
      <div>
        <h1>{movie.title}</h1>
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Antony</Typography>
            <StyledRating2 name="read-only" value={movie.ratingA} max={10} precision={0.5} size="large" icon={<FavoriteIcon />} readOnly />
          </Box>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Débora</Typography>
            <StyledRating name="read-only" value={movie.ratingB} max={10} precision={0.5} size="large" icon={<AcUnitSharpIcon />} readOnly />
          </Box>
        </div>
      </div>
    </Container>
  )
}

export default Movie;