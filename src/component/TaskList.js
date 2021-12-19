import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        {tasks.map((task, key) => {
          return <Task task={task} key={task.id} />;
        })}
      </div>

      <div className="todo-items-info">
        <div className="items-left">6 items left</div>
        <div className="items-statuses">
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <div className="items-clear">
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
