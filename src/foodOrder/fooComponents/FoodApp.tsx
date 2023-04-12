import React, { Fragment } from 'react';
import Header from './Layout/Header';
import Meals from './Meals/Meals';

function FoodApp() {
    return <Fragment>
        <Header />
        <main>
            <Meals />
        </main>
    </Fragment>
}

export default FoodApp;