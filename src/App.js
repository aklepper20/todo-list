import "./App.css";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="title">TODO</div>
          <div className="theme">
            <img src="./images/icon-sun.svg" alt="theme" />
          </div>
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
