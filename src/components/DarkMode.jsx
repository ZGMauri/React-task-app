import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { MdNightlightRound } from 'react-icons/md';

export default function DarkMode() {
  const { changeMode  } = useContext(TaskContext);

  return (
    <div>
      <button className=" bg-gray-500" onClick={() => changeMode()}>
        Modo nocturno <MdNightlightRound />
      </button>
    </div>
  )
}
