import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event: any) => {
    event.preventDefault();
    // custom validation 
    if(name.trim().length === 0 || age.trim().length === 0 ) {return;}
    if(+age  < 1){return;}
    setName("");
    setAge("");
  };

  const nameChangeHandler = (event: any) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Name</label>
        <input
          id="userName"
          type="text"
          value={name}
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
