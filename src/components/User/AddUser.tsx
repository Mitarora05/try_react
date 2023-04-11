import React from "react";
import classes from './AddUser.module.css';
import Card from "../UI/Card";

const AddUser = () => {
    const addUserHandler = (event: any) => {
        event.preventDefault();
    };
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="userName">Name</label>
            <input id="userName" type="text"/>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number"/>
            <button type="submit">Add User</button>
        </form>
        </Card>
    )
};

export default AddUser;