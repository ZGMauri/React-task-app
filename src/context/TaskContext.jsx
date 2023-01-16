import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function updateTask(taskId) {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    taskToUpdate.completed = true;
    const completedTasks = tasks.filter((task) => task.completed === true);
    setTasks([...tasks]);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        updateTask,
        completedTasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
