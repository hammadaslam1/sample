import { useState } from "react";
import { Button } from "@mui/material";
import MySQL from "../../screens/MySQL";
import Firebase from "../../screens/Firebase";

const Navbar = () => {
  const [isData, setIsData] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#656256",
      }}
    >
      <div style={{
        position: "absolute",
        display: "flex",
        width: '100%',
        justifyContent: "space-evenly",
      }}>
        <Button
          variant="contained"
          sx={{
            margin: 2,
            backgroundColor: isData ? "#fff" : "#04030f",
            color: isData ? "#04030f" : "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#04030f",
              color: "#fff",
            },
          }}
          onClick={() => setIsData(false)}
        >
          Firebase
        </Button>
        <Button
          variant="contained"
          sx={{
            margin: 2,
            backgroundColor: isData ? "#04030f" : "#fff",
            color: isData ? "#fff" : "#04030f",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#04030f",
              color: "#fff",
            },
          }}
          onClick={() => setIsData(true)}
        >
          MySQL
        </Button>
      </div>
      {isData ? <MySQL /> : <Firebase />}
    </div>
  );
};

export default Navbar;
