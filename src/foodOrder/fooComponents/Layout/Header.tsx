import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

interface HeaderProps {
  // Define props if needed
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};
export default Header;
