/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { Box, Button, Card, Typography } from "@mui/material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { useState } from "react";
import UserModal from "../components/modals/UserModal";
import { Input } from "@mui/joy";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PrimaryInput from "../components/inputs/PrimaryInput";
import axios from "axios";

const Home = () => {
  // const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleData = () => {
    // alert("name: " + name + "\nemail: " + email);
    if (name.length > 0 && email.length > 0) {
      const url = "http://localhost/advweb/upload.php";

      let fData = new FormData();
      fData.append("name", name);
      fData.append("email", email);

      axios
        .post(url, fData)
        .then(() => alert("successfully updated"))
        .catch((e) => alert(e.message));
    }
  };
  const inputs = [
    {
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: "abc@gmail.com",
      startDecorator: <EmailIcon sx={{ color: "#04030F" }} />,
      name: "email",
    },
    {
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "mad coder",
      startDecorator: <PersonIcon sx={{ color: "#04030F" }} />,
      name: "name",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#656256",
        color: "#fff",
      }}
    >
      {/* <Typography variant="h3">Hammad</Typography> */}
      {/* <PrimaryButton onClick={() => setOpen(!open)} /> */}
      {/* {open && <Typography variant="h2">{open.toString()}</Typography>}  */}
      {/* {open && <UserModal open={open} onClose={handleClose} />} */}

      <Card
        sx={{
          padding: 5,
          width: 400,
          backgroundColor: "#04030F",
          borderRadius: 10,
          color: "#fff",
        }}
        elevation={10}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          User Data
        </Typography>
        {/* <PrimaryInput
          // variant="plain"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
          startDecorator={<EmailIcon sx={{ color: "#04030F" }} />}
        />
        <PrimaryInput
          // variant="plain"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="mad coder"
          startDecorator={<PersonIcon sx={{ color: "#04030F" }} />}
        /> */}
        {inputs.map((data, i) => (
          <PrimaryInput
            key={i}
            type={data.type}
            value={data.value}
            onChange={data.onChange}
            placeholder={data.placeholder}
            startDecorator={data.startDecorator}
          />
        ))}
        <Button variant="contained" onClick={handleData}>
          submit
        </Button>
      </Card>
    </div>
  );
};

export default Home;
