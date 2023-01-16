import TaskDone from "./TaskDone";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskListDone() {
  const { completedTasks } = useContext(TaskContext);

  if (completedTasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aun
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {completedTasks.map((task) => (
  <TaskDone key={task.id} completeTask={task} />
))}
    </div>
  );
}

export default TaskListDone;