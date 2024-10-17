import React, { useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const addTask = () => {
    if (!input.trim()) {
      alert("write your task before adding..");
    } else {
      if (!editId) {
        let obj = {
          task: input,
          id: Math.trunc(Math.random() * 10000),
        };
        setTasks([...tasks, obj]);
        setInput("");
      } else {
        let newTask = tasks.map((ele) => {
          if (ele.id === editId) {
            ele.task = input;
          }
          return ele;
        });
        setTasks(newTask);
        setInput("");
        setEditId(null);
      }
    }
  };
  const deleteTask = (id) => {
    let newTasks = tasks.filter((ele) => ele.id != id);
    setTasks(newTasks);
  };
  const editTask = (id) => {
    setEditId(id);
    let editTask = tasks.find((ele) => ele.id == id);
    setInput(editTask.task);
  };
  return (
    <div className="main">
      <div className="row ">
        <div className="col-12">
          <div className="card ">
            <div className="card-header bg-secondary">
              <h2 className="bg-danger text-center text-white p-1">TODO APP</h2>
            </div>
            <div className="card-body bg-secondary mt-2">
              <div className="row">
                <div className="col-10">
                  <input
                    type="text"
                    className="form-control inputs"
                    placeholder="ENTER YOUR TASK HERE......"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-primary text-white w-100 fs-5"
                    onClick={addTask}
                  >
                    {editId ? "UPDATE" : "ADD TASK"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tasks">
        {tasks.map((e) => {
          return (
            <div className="task">
              <h1>{e.task}</h1>
              <div className="buttons">
                <MdDelete
                  className="fs-4"
                  onClick={() => deleteTask(e.id)}
                ></MdDelete>
                <FaEdit
                  className="fs-4"
                  onClick={() => editTask(e.id)}
                ></FaEdit>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
