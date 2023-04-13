import React from 'react';
import Movies from './Movies';
import classes from './MoviesList.module.css';

interface Movie {
  id: React.Key;
  title: string;
  releaseDate: string;
  openingText: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps): JSX.Element => {
  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie: Movie) => (
        <Movies
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;