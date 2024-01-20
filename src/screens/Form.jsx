import { Alert, Button, Card, Typography } from "@mui/material";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PrimaryInput from "../components/inputs/PrimaryInput";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase/firebase";

const Form = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const database = getDatabase(app);
  const inputs = [
    {
      type: "email",
      value: email,
      onChange: (e) => {
        setEmail(e.target.value);
        setError(false);
      },
      placeholder: "abc@gmail.com",
      startDecorator: <EmailIcon sx={{ color: "#04030F" }} />,
      name: "email",
    },
    {
      type: "text",
      value: name,
      onChange: (e) => {
        setName(e.target.value);
        setError(false);
      },
      placeholder: "mad coder",
      startDecorator: <PersonIcon sx={{ color: "#04030F" }} />,
      name: "name",
    },
  ];

  const handleData = () => {
    const currentTime = new Date().getTime()
    set(ref(database, 'users/'+currentTime), {
        name: name,
        email: email,
      })
      .then(() => {
        alert("successfully updated");
      })
      .catch((e) => {
        alert("error: " + e.message);
      });
  };
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
        {error && (
          <Alert severity="error" variant="outlined">
            Please fill all fields!
          </Alert>
        )}
        <Button
          variant="text"
          onClick={handleData}
          sx={{
            marginY: 3,
            color: "#04030F",
            backgroundColor: "#fff",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#fffa" },
          }}
        >
          submit
        </Button>
      </Card>
    </div>
  );
};

export default Form;
