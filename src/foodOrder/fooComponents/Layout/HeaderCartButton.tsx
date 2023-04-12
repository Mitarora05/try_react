import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

interface HeaderCartButtonProps {
  // Define props if needed
}
const HeaderCartButton: React.FC<HeaderCartButtonProps> = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
