import React from "react";
import "../App.css";

function TaskInput() {
  return (
    <div className="new-todo">
      <div className="check">
        <div className="check-mark"></div>
      </div>
      <div className="new-todo-input">
        <form>
          <input type="text" placeholder="Create a new todo..." />
        </form>
      </div>
    </div>
  );
}

export default TaskInput;
