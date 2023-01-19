import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskListDone from "./components/TaskListDone"
import TaskFormDone from "./components/TaskFormDone";
import DarkMode from "./components/DarkMode";
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function App() {
  const { style  } = useContext(TaskContext);

  return (
    <main className={style}>
      <DarkMode />
      <div className="container mx-auto p-10">
        <TaskForm />
        <h1 className="text-4xl font-bold text-center p-2 m-4 text-white bg-slate-500">Tareas pendientes</h1>
        <TaskList />
        <h1 className="text-4xl font-bold text-center p-2 m-4 text-white bg-slate-500">Tareas realizadas</h1>
        <TaskFormDone />
        <TaskListDone />
      </div>
    </main>
  );
}

export default App;