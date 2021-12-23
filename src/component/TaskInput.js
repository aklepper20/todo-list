import React, { useState } from "react";
import "../App.css";

//Save what I wrote in rhe input field into a state
function TaskInput({ tasks, setTasks, dark }) {
  const [input, setInput] = useState("");

  //create an incrementing ID for your new todo list
  const createId = (array) => {
    //Getting all the ids from the todo objects
    const ids = array.map((item) => item.id);
    //returning the current highest id number in the array and add 1.
    //that number will be assigned to the newest key in the new todo task item
    return Math.max(...ids) + 1;
  };
  //When I type, I need to save the input I typed into the field
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //I need a function that runs when I submit
  const handleForm = (e) => {
    e.preventDefault();

    //Add what I put into input into the tasks array
    //ONLY CREATE AN OBJECT IF THERE IS AN INPUT
    //Create an object

    if (input) {
      const newTask = {
        id: createId(tasks),
        //Remove the whitesapce BEFORE and AFTER the string
        text: input.trim(),
        status: false,
      };
      //ADD a new task to the state. Put newTask first to put the new item on top of the array
      setTasks([newTask, ...tasks]);

      //Reset input state so after entering todo it goes back!
      setInput("");
    }
  };

  const darkThemeBg = dark ? "darkTheme" : "";

  return (
    <div className="new-todo">
      <div className={`check ${darkThemeBg}`}>
        <div className="check-mark"></div>
      </div>
      <div className={`new-todo-input ${darkThemeBg}`}>
        <form onSubmit={handleForm}>
          <input
            className={`${darkThemeBg}`}
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </div>
    </div>
  );
}

export default TaskInput;
