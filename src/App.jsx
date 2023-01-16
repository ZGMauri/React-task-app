import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDone from "./components/TaskDone";
import TaskFormDone from "./components/TaskFormDone";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <h1 className="text-4xl font-bold text-center p-2 m-4 text-white bg-slate-500">Tareas pendientes</h1>
        <TaskList />
        <h1 className="text-4xl font-bold text-center p-2 m-4 text-white bg-slate-500">Tareas realizadas</h1>
  {completedTasks.map((task) => (
    <TaskCard key={task.id} task={task} />
  ))}
        <TaskFormDone />
        <TaskDone />
      </div>
    </main>
  );
}

export default App;