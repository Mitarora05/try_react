import React from 'react';

import Movies from './Movies';
import classes from './MoviesList.module.css';
// import MoviesApp from '../MoviesApp';

interface Movie {
    id: string | number;
    title: string;
    releaseDate: string;
    openingText: string;
  }

interface MovieListProps {
  map(arg0: (movie: { id: React.Key | null | undefined; title: string; releaseDate: string; openingText: string; }) => JSX.Element): React.ReactNode;
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = (movies) => {
    return (
      <ul className={classes['movies-list']}>
        {movies.map((movie: { id: React.Key | null | undefined; title: string; releaseDate: string; openingText: string; }) => (
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
