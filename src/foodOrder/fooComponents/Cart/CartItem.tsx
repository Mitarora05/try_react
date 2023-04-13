import React from 'react';
import classes from './CartItem.module.css'; // Assuming CSS classes are imported from a separate module

interface CartItemProps {
  name: string;
  price: number;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;