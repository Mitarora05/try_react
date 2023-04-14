import React, { useState } from 'react';
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';
// import useHttp from '../../TaskApp';

// import React from 'react';
// import  useHttp, RequestConfig  from '../../hooks/use-http'; // assuming useHttp is defined in a separate file

interface Task {
  id: string;
  text: string;
}
interface RequestConfig {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: any;
}

interface NewTaskProps {
  onAddTask: (task: Task) => void;
}

const NewTask: React.FC<NewTaskProps> = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: string, taskData: { name: string }) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText: string) => {
    const requestConfig: RequestConfig = {
      url: 'https://react-hooks-8e66f-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText },
    };

    sendTaskRequest(requestConfig, createTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
