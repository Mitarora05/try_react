import React from 'react';
import classes from './Card.module.css';

interface ICard extends React.PropsWithChildren{}

const Card: React.FC<ICard> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;