import "./App.css";
import Search from "./components/Search";
import Button from "./components/Button";
import List from "./components/List";

import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  function handleChange(taskValue) {
    setTask(taskValue);
  }

  function handleClick() {
    if (task != "") {
      const newTasks = [...addTask, task];
      setAddTask(newTasks);
      setTask("");
    }
  }

  function handleEnter(keyCode) {
    if (keyCode == 13) {
      handleClick();
    }
  }

  function onDelete(position) {
    console.log(`trato de borrar la posicion ${position}`);
    const newTasks = addTask.filter((task, key) => {
      return key != position;
    });

    setAddTask(newTasks);
  }

  return (
    <>
      <div className="searchBar">
        <Search
          handleCallbackEnter={handleEnter}
          handleCallback={handleChange}
          value={task}
        />
        <Button onClick={handleClick} />
        <List tasks={addTask} handleDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
