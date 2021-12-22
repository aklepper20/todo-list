import "./App.css";
import { useState, useEffect } from "react";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";

const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];

function App() {
  const [tasks, setTasks] = useState(data);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  let [sumOfTruths, setSumOfTruths] = useState(tasks.length);

  useEffect(() => {
    const handleFilter = () => {
      if (filterStatus === "active") {
        return setFilteredTasks(tasks.filter((task) => task.status === false));
      } else if (filterStatus === "completed") {
        return setFilteredTasks(tasks.filter((task) => task.status === true));
      } else {
        return setFilteredTasks(tasks);
      }
    };
    handleFilter();
  }, [tasks, filterStatus]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].status === false) {
        sum++;
      }
      setSumOfTruths(sum);
    }
  }, [tasks]);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="title">TODO</div>
          <div className="theme">
            <img src="./images/icon-sun.svg" alt="theme" />
          </div>
        </div>
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <TaskList
          sumOfTruths={sumOfTruths}
          tasks={tasks}
          setTasks={setTasks}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
        />
      </div>
    </div>
  );
}

export default App;
