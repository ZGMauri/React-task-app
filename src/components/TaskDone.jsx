import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskDone({ task }) {
  const { updateTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">dsds</h1>
      <p className="text-gray-500 text-sm">asdas</p>
    </div>
  );
}

export default TaskDone;