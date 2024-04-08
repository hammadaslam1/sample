/* eslint-disable eqeqeq */
import { Box, Button, Card, Input, List, Toolbar } from "@mui/material";
import { useState } from "react";
import Todo from "./Todo";
import UpdateForm from "./UpdateForm";

const Form = ({
  todoList,
  setTodoList,
  handleToggle,
  handleFilter,
  handleUpdate,
}) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const [input, setInput] = useState("");
  // alert(todoList[todoList.length - 1].id);
  // const [lastIndex, setLastIndex] = useState(todoList[todoList.length - 1].id);
  const [arr, setArr] = useState(todoList);
  const handleClick = () => {
    const index = todoList[0].id;
    // alert(index);
    setTodoList([...todoList, { id: index + 1, task: input, complete: false }]);
    // setLastIndex((n) => n + 1);
    setInput("");
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };
  return (
    <div onKeyDown={handleKeyDown}>
      <Card sx={{ margin: "20px", padding: "20px" }}>
        <Box sx={{ display: "flex" }}>
          <Input
            sx={{ flex: 2 }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button sx={{ flex: 1 }} variant="contained">
            Submit
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}></Box>
        <Box>
          {todoList
            .sort((a, b) => b.id - a.id)
            .map((todo, i) => (
              <Toolbar key={i}>
                <Todo
                  todo={todo}
                  i={i}
                  handleToggle={handleToggle}
                  handleFilter={handleFilter}
                  handleUpdate={handleUpdate}
                  setShow={setShow}
                  setId={setId}
                  show={show}
                />
              </Toolbar>
            ))}
        </Box>
      </Card>
    </div>
  );
};

export default Form;
