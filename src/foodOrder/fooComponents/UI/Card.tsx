import classes from './Card.module.css';

interface ICardProps extends React.PropsWithChildren<{}> {
    // Define props if needed
  }

const Card: React.FC<ICardProps> = props  => {
  return <div className={classes.card}>{props.children}</div>
};

export default Card;