/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { useState } from "react";
import Form from "../lab07/Form";
import Header from "../lab07/Header";
import TodoList from "../lab07/TodoList";
import "../lab07/lab7.css";
import { data } from "../lab07/Data";
const Lab07 = () => {
  const [todoList, setTodoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = todoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
    // handleFilter();
  };

  const handleFilter = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const handleUpdate = (id, task) => {
    let mapped = todoList.map((item) => {
      return item.id == id ? { ...item, task: task } : { ...item };
    });
    setTodoList(mapped);
  };

  return (
    <>
      {/* <Header /> */}
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        handleFilter={handleFilter}
        handleToggle={handleToggle}
        handleUpdate={handleUpdate}
      />
      {/* <TodoList
        todoList={todoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      /> */}
    </>
  );
};

export default Lab07;
