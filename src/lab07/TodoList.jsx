import { Button } from "@mui/material";
import Todo from "./Todo";

const TodoList = ({ todoList, handleToggle, handleFilter }) => {
  return (
    <div>
        {/* <Button variant="contained" sx={{margin: '20px'}} color="warning" onClick={handleFilter}>Clear Completed</Button> */}
      {todoList.sort((a, b) => b.id - a.id).map((todo, i) => {
        return <Todo todo={todo} i={i} handleToggle={handleToggle} handleFilter={handleFilter} />;
      })}
    </div>
  );
};

export default TodoList;
