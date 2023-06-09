import { Fragment } from "react";

import mealsImage from '../assets/meals.jpg';
import classes from '../Layout/Header.module.css';

const Header = (props) => {
    return (
    <Fragment> 
     <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
    
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="A table full of Delicious food"/>
        </div>

    </Fragment>
    )
}
export default Header;