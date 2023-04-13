import React from 'react';
import classes from './Input.module.css';

interface IInput {
  input: React.InputHTMLAttributes<HTMLInputElement>;
  label: string;
}

const Input: React.FC<IInput> = ({ input, label }) => {
  const { id, ...inputProps } = input;

  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />
    </div>
  );
};

export default Input;