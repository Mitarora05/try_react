import React, { useReducer } from 'react';

import CartContext from './cart-context';

interface ICartProvider extends React.PropsWithChildren {};

interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

interface CartAction {
  type: string;
  item?: CartItem;
  id?: string;
}

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state: CartState, action: CartAction) => {
    
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item!);
    const updatedTotalAmount = state.totalAmount + action.item!.price * action.item!.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  } else if (action.type === 'REMOVE') {
    const updatedItems = state.items.filter(item => item.id !== action.id);
    const updatedTotalAmount = state.totalAmount - state.items.find(item => item.id === action.id)!.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider: React.FC<ICartProvider> = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
