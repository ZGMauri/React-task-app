import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskDone( props ) {
  const { deleteTask, updateTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{props.completeTask.title}</h1>
      <p className="text-gray-500 text-sm">{props.completeTask.description}</p>
    </div>
  );
}

export default TaskDone;
