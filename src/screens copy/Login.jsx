/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { Alert, Button, Card, Typography } from "@mui/material";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PrimaryInput from "../components/inputs/PrimaryInput";
import { ref, set } from "firebase/database";
import {
  auth,
  createUserWithEmailAndPassword,
  database,
  signInWithEmailAndPassword,
} from "../firebase/firebase";

const Login = () => {
  const [error, setError] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(true);
  const inputs = [
    {
      type: "email",
      value: email,
      onChange: (e) => {
        setEmail(e.target.value);
        setIsFilled(false);
      },
      placeholder: "abc@gmail.com",
      startDecorator: <EmailIcon sx={{ color: "#04030F" }} />,
      name: "email",
    },
    {
      type: "password",
      value: password,
      onChange: (e) => {
        setPassword(e.target.value);
        setIsFilled(false);
      },
      placeholder: "******",
      startDecorator: <PersonIcon sx={{ color: "#04030F" }} />,
      name: "password",
    },
  ];
  const handleData = () => {
    if (status) {
      handleSignin();
    } else {
      handleSignup();
    }
  };
  const handleSignup = () => {
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("signed up");
        })
        .catch((e) => {
          if (e.code == "auth/invalid-email") {
            setError("Invalid email");
            setIsFilled(true);
          } else if (e.code == "auth/invalid-credential") {
            setError("Invalid email or password!");
            setIsFilled(true);
          }
        });
    } else {
      setError("Please fill all fields");
      setIsFilled(true);
    }
  };
  const handleSignin = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          
        })
        .catch((e) => {
          if (e.code == "auth/invalid-email") {
            setError("Invalid email");
            setIsFilled(true);
          } else if (e.code == "auth/invalid-credential") {
            setError("Invalid email or password!");
            setIsFilled(true);
          }
        });
    } else {
      setError("Please fill all fields");
      setIsFilled(true);
    }
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
          {status ? "Login" : "Signup"}
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
        {isFilled && (
          <Alert severity="error" variant="outlined">
            {error}
          </Alert>
        )}
        <div style={{ display: "flex", flexDirection: "column" }}>
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
            {status ? "Login" : "Signup"}
          </Button>
          <Button
            variant="text"
            onClick={() => setStatus(!status)}
            sx={{
              marginY: 3,
              color: "#04030F",
              backgroundColor: "#fff",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#fffa" },
            }}
          >
            {!status ? "Login" : "Signup"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
