import { Checkbox, IconButton, TextField } from "@mui/material";
import "./lab7.css";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneAllIcon from "@mui/icons-material/DoneAll";
const Todo = ({
  todo,
  i,
  handleToggle,
  handleFilter,
  // setShow,
  handleUpdate,
  setId,
  // show,
}) => {
  const [show, setShow] = useState(false);
  // const [id, setId] = useState(0);
  const [task, setTask] = useState(todo.task);
  console.log(todo.complete);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {!show ? (
        <div
          className={todo.complete ? "strike" : ""}
          // onClick={() => handleToggle(todo.id)}
        >
          <Checkbox
            checked={todo.complete}
            onChange={() => handleToggle(todo.id)}
          />
          {todo.task}
        </div>
      ) : (
        <TextField
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      )}
      <div>
        <IconButton
          onClick={() => {
            setShow(true);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setShow(false);
            handleUpdate(todo.id, task);
          }}
        >
          <DoneAllIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Todo;
