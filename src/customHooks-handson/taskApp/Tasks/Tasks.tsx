import React from 'react';
import classes from './Tasks.module.css';
import TaskItem from './TaskItem';
import Section from '../UI/Section';

interface Task {
  id: string;
  text: string;
}

interface TasksProps {
  items: Task[];
  error: boolean;
  loading: boolean;
  onFetch: () => void;
}

const Tasks: React.FC<TasksProps> = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = <div>Loading tasks...</div>; // Fix the assignment to a valid React element
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
