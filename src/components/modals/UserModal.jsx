import { Input } from "@mui/joy";
import { Box, Button, Dialog, Modal, Typography } from "@mui/material";
import { useState } from "react";

const UserModal = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleData = () => {
    alert("name: " + name + "\nemail: " + email);
  };
  return (
    <Dialog
      //   TransitionComponent={Transition}
      keepMounted={true}
      scroll="body"
      PaperProps={{ sx: { borderRadius: "30px" } }}
      {...props}
    >
      <Box sx={{ padding: 5, width: 400 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          User Data
        </Typography>
        <Input
          variant="plain"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
        />
        <Input
          variant="plain"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="mad coder"
        />
        <Button variant="contained" onClick={handleData} >submit</Button>
      </Box>
    </Dialog>
  );
};

export default UserModal;
