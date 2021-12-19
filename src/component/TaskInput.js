import React, { useState } from "react";
import "../App.css";

//Save what I wrote in rhe input field into a state
function TaskInput({ tasks, setTasks }) {
  const [input, setInput] = useState("");

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
        id: 7,
        //Remove the whitesapce BEFORE and AFTER the string
        text: input.trim(),
        status: false,
      };
      //ADD a new task to the state
      setTasks([...tasks, newTask]);

      //Reset input state so after entering todo it goes back!
      setInput("");
    }
  };

  return (
    <div className="new-todo">
      <div className="check">
        <div className="check-mark"></div>
      </div>
      <div className="new-todo-input">
        <form onSubmit={handleForm}>
          <input
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
