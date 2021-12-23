import "./App.css";
import { useState, useEffect } from "react";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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
  const [dark, setDark] = useState(false);

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

  // const checked = mutableTask.status ? "checked" : "";
  // const checkIcon = mutableTask.status ? <img src={Check} alt="Checked" /> : "";
  const swapTheme = () => {
    const isDark = !dark;
    setDark(isDark);
  };

  const darkThemeApp = dark ? "darkThemeAppBg" : "";

  return (
    <div className={`App ${darkThemeApp}`}>
      <div className="container">
        <div className="header">
          <div className="title">TODO</div>
          <div className="theme">
            <div onClick={swapTheme}>
              {dark ? <DarkModeIcon /> : <WbSunnyIcon />}
            </div>
          </div>
        </div>
        <TaskInput tasks={tasks} setTasks={setTasks} dark={dark} />
        <TaskList
          dark={dark}
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
