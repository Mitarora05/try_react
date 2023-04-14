import React from 'react';
import classes from './TaskItem.module.css';

interface ITaskItem extends React.PropsWithChildren{}
 
const TaskItem: React.FC<ITaskItem> = (props) => {
  return <li className={classes.task}>{props.children}</li>
};

export default TaskItem;