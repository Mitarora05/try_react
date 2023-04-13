import React, { Fragment } from 'react';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';

function FoodApp() {
    return <Fragment>
        <Cart />
        <Header />
        <main>
            <Meals />
        </main>
    </Fragment>
}

export default FoodApp;