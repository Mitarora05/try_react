import React from 'react';

import classes from './Movies.module.css';

interface MovieProps {
  title: string;
  releaseDate: string;
  openingText: string;
}

const Movie: React.FC<MovieProps> = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
