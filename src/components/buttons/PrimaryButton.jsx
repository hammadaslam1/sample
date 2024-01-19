// import { Button, Input } from "@mui/material";

import { Input } from "@mui/joy";
import { Button } from "@mui/material";

const PrimaryButton = (props) => {
  // spread operator = {...}
  const style = {
    color: "#fff",
    backgroundColor: "#023d65",
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Button size="large" variant="contained" onClick={props.onClick}>
        hello
      </Button>
      <Input />
    </div>
  );
};

export default PrimaryButton;
