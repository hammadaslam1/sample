/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { useState } from "react";
import UserModal from "../components/modals/UserModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      {/* <Typography variant="h3">Hammad</Typography> */}
      <PrimaryButton onClick={() => setOpen(!open)} />
      {/* {open && <Typography variant="h2">{open.toString()}</Typography>}  */}
      {open && <UserModal open={open} onClose={handleClose} />}
    </Box>
  );
};

export default Home;
