/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Avatar,
  Button,
  Card,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PrimaryInput from "../components/inputs/PrimaryInput";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { database } from "../firebase/firebase";

const Firebase = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [file, setFile] = useState([]);
  // const file = []
  // const database = getDatabase(app);
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

  useEffect(() => {
    const userRef = ref(database, "users/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const objList = [];
      for (let objId of Object.keys(data || {})) {
        const obj = data[objId];
        objList.push({ ...obj, key: objId });
      }
      objList.sort((a, b) => b.key - a.key);
      console.log(objList);
      setFile(objList);
      console.log(file);
    });
  }, []);

  const handleData = () => {
    if (email.length > 0 && name.length > 0) {
      const currentTime = new Date().getTime();
      set(ref(database, "users/" + currentTime), {
        name: name,
        email: email,
      })
        .then(() => {
          setName("");
          setEmail("");
        })
        .catch((e) => {
          alert("error: " + e.message);
        });
    }
  };
  return (
    <div
      style={{
        color: "#fff",
        padding: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "100%",
          backgroundColor: "#04030f",
          color: "#fff",
          borderRadius: "40px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: "#04030F",
            color: "#fff",
            height: "80vh",
            overflow: "auto",
          }}
        >
          {file.map((data, i) => (
            <div key={i}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 10px",
                }}
              >
                <Typography variant="overline">{i + 1}</Typography>
                <div>
                  <Typography variant="h6" sx={{ textAlign: "right" }}>
                    {data.name}
                  </Typography>
                  <Typography variant="overline" sx={{ textAlign: "right" }}>
                    {data.email}
                  </Typography>
                </div>
              </div>
              <div style={{ border: "1px solid #6a6a6a" }}></div>
            </div>
          ))}
        </div>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#65625633",
            height: "75vh",
            padding: 15,
            borderTopLeftRadius: "80px",
            borderBottomLeftRadius: "80px",
          }}
        >
          <div
            style={{
              padding: 35,
              // height: "80vh",

              backgroundColor: "transparent",
              borderRadius: 10,
              color: "#fff",
            }}
            elevation={10}
          >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Firebase
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firebase;
