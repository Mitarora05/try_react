import React from "react";

import Card from "../UI/Card";
import classes from './UserList.module.css';

const UserList = (props: any) => {
  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map((user: any) => (
        <li>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UserList;
