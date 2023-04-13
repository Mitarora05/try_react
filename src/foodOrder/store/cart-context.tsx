import React from 'react';

interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

interface CartContextValue {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextValue>({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItem) => {},
  removeItem: (id: string) => {}
});

export default CartContext;