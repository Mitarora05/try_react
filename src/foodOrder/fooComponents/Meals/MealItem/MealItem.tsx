import React from "react";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";

interface IMealItemProps {
  id: string;
  price: number | undefined;
  name?: string;
  description?: string;
}

const MealItem: React.FC<IMealItemProps> = ({ id, price, name, description }) => {
  const formattedPrice = price ? `$${price.toFixed(2)}` : '';

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;