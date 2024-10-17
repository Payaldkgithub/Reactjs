import React from "react";
import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);
  const [editId, setEditId] = useState(null);
  function addTask() {
    if (!input) {
      alert("please enter task..");
    } else {
      if (!editId) {
        let obj = {
          id: Math.trunc(Math.random() * 10000),
          task: input,
        };
        setTask([...tasks, obj]);
        setInput("");
      } else {
        let newTask = tasks.map((e) => {
          if (e.id == editId) {
            e.task = input;
          }
          return e;
        });
        setTask(newTask);
        setEditId("");
        setInput("");
      }
    }
  }
  function deleteTask(id) {
    let newTask = tasks.filter((e) => e.id != id);
    setTask(newTask);
  }
  function editTask(id) {
    setEditId(id);
    let newTask = tasks.find((e) => e.id === id);
    setInput(newTask.task);
  }
  return (
    <div>
      <h1>To-do list</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>{editId ? "Update" : "Add"}</button>
      {tasks.map((e) => {
        return (
          <>
            <h1>{e.task}</h1>
            <button onClick={() => editTask(e.id)}>Edit</button>
            <button onClick={() => deleteTask(e.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
}

export default TodoList;
