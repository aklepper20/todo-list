import React from "react";

function TaskList() {
  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        <div className="todo-item">
          <div className="check">
            <div className="check-mark"></div>
          </div>
          <div className="todo-text">what up</div>
        </div>
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
