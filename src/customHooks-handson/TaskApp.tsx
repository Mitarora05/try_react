import React, { useState, useEffect } from "react";
import useHttp from "./hooks/use-http";
import NewTask from "./taskApp/NewTask/NewTask";
import Tasks from "./taskApp/Tasks/Tasks";

interface Task {
  id: string;
  text: string;
}

const TaskApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const fetch = useEffect(() => {
    const transformTasks = (tasksObj: Record<string, Task>) => {
      const loadedTasks: Task[] = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url: 'https://react-hooks-8e66f-default-rtdb.firebaseio.com/tasks.json' },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task: Task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error !== null}
        onFetch={fetch}
      />
    </React.Fragment>
  );
}

export default TaskApp;