import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskFormDone() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
    </div>
  );
}

export default TaskFormDone;