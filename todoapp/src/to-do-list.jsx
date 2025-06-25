import React, { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  const insert = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); 
    }
    return;
  };
  return (
    <div className="inputstyle">
      <h1>Todo-list📝</h1>
      <form onSubmit={insert}>
        <label for="name"></label>
        <input
          className="inp"
          value={newTask}
          onChange={handleInputChange}
          type="text"
          placeholder="Adicionar tarefa..."
          id="name"
        />
        <button className="btnsub" type="submit">
          Add
        </button>
      </form>
      <ol>
        {tasks.map((task, index) => (
          <li className="itens" key={index}>
            <Item className="item" value={task} />
            <DeleteButton onClick={() => deleteTask(index)} />
          </li>
        ))}
      </ol>
    </div>
  );
}

const Item = ({ value }) => {
  return <div>{value}</div>;
};

const DeleteButton = ({ onClick }) => {
  return (
    <div>
      <button className="deletebtn" onClick={onClick}>Delete</button>
    </div>
  );
};

export default Todolist;
