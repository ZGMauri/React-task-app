import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [style, setStyle] = useState("bg-zinc-100 h-screen");

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
    const taskToComplete = tasks.find((task) => task.id === taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setCompletedTasks([...completedTasks, taskToComplete]);
    setTasks(updatedTasks);
  }

  function changeMode() {
    if (style === "bg-zinc-100 h-screen"){
      setStyle("bg-zinc-900 h-screen")
    } else {setStyle("bg-zinc-100 h-screen")}
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
        completedTasks,
        changeMode,
        style
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
