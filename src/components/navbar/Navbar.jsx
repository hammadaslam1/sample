import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import MySQL from "../../screens/MySQL";
import Firebase from "../../screens/Firebase";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "../../screens/Login";

const Navbar = () => {
  const [isData, setIsData] = useState(false);
  const [user, setUser] = useState(false);

  const handleSignOut = () => {
    if (auth.currentUser) {
      signOut(auth);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (auth.currentUser) {
        // auth.currentUser.displayName = 'hammad'
        setUser(true);

        // setOpenLogin(false);
      } else {
        setUser(false);
        // setOpenLogin(true);
      }
    });
  }, []);

  if (user) {
    return (
      <div
        style={{
          backgroundColor: "#656256",
        }}
      >
        <div
          style={{
            backgroundColor: "#656256",
            zIndex:2,
            position: "sticky",
            top: 0,
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
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
          {/* <div> */}
          <Button
            variant="contained"
            sx={{
              margin: 2,
              backgroundColor: "#04030f",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#04030f",
                color: "#fff",
              },
            }}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
          {/* </div> */}
        </div>
        {isData ? <MySQL /> : <Firebase />}
      </div>
    );
  } else {
    return <Login />;
  }
};

export default Navbar;
