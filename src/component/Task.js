import React from "react";

function Task({ task }) {
  return (
    <div className="todo-item">
      <div className="check">
        <div className="check-mark"></div>
      </div>
      <div className="todo-text">{task.text}</div>
    </div>
  );
}

export default Task;
