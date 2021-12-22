import React from "react";
import Task from "./Task";
import FilterControl from "./FilterControl";

function TaskList({
  tasks,
  setTasks,
  filterStatus,
  setFilterStatus,
  filteredTasks,
  setFilteredTasks,
  sumOfTruths,
}) {
  const clearCompleted = () => {
    // setFilteredTasks(tasks.filter((task) => task.status === false));
    let result = prompt(
      "Are you sure you want to delete your completed todo items? Type Y to delete..."
    );

    result = result.toLowerCase();

    if (result === "y" || result === "yes") {
      setTasks(tasks.filter((task) => task.status === false));
      return;
    } else {
      return;
    }
  };

  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        {filteredTasks.map((task, key) => {
          return (
            <Task task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
          );
        })}
      </div>

      <div className="todo-items-info">
        <div className="items-left">{sumOfTruths} items left</div>
        <FilterControl
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
        <div className="items-clear" onClick={clearCompleted}>
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
