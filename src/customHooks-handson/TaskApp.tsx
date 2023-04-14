import React, { useState, useEffect } from "react";
import Tasks from "./taskApp/Tasks/Tasks";
import NewTask from "./taskApp/NewTask/NewTask";

interface Task {
  id: string;
  text: string;
}

function TaskApp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async (taskText?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-hooks-8e66f-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedTasks: Task[] = Object.keys(data).map((taskKey) => ({
        id: taskKey,
        text: data[taskKey].text,
      }));

      setTasks(loadedTasks);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong!");
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error !== null}
        onFetch={fetchTasks}
      />
    </>
  );
}

export default TaskApp;
