import { Box, Input } from "@mui/material";
import { useEffect, useState } from "react";

const UpdateForm = (props) => {
  const [list, setList] = useState("");
  const [todo, setTodo] = useState(props.list);
  const [id, setId] = useState(props.id);

  useEffect(() => {
    const data = todo.filter((data) => data == id);
    setList(data);
  }, []);

  return (
    <Box>
      <Input
        name="task"
        label="Task"
        defaultValue={list.task}
        onChange={(e) => props.handleUpdata()}
      />
    </Box>
  );
};

export default UpdateForm;
