import React, { useState } from "react";
import Check from "../images/icon-check.svg";
import TaskList from "./TaskList";

function Task({ task, tasks, setTasks, dark }) {
  const [mutableTask, setMutableTask] = useState(task);

  //create a unction that when clicked the task status will be true on the frontend and backend(data)
  const markCompleted = () => {
    //set the status to the opposite onclick(frontend)
    setMutableTask({ ...mutableTask, status: !mutableTask.status });

    //update the status on the original data
    //map is returning a new array on the OG tasks array, so they will be deleted
    //as we are looping thru, if the item id matches the item we clicked,
    //bring back the coped task item, flip and update the .status value...if its not just do nothing

    const updatedTasks = tasks.map((item) =>
      item.id === task.id ? { ...item, status: !item.status } : item
    );

    setTasks(updatedTasks);
  };

  const checked = mutableTask.status ? "checked" : "";
  const checkIcon = mutableTask.status ? <img src={Check} alt="Checked" /> : "";
  const darkThemeBg = dark ? "darkTheme" : "";

  return (
    <div className="todo-item">
      <div className="check" onClick={markCompleted}>
        <div className={`check-mark ${checked}`}>{checkIcon}</div>
      </div>
      <div className={`todo-text ${darkThemeBg} ${checked}`}>{task.text}</div>
    </div>
  );
}

export default Task;
