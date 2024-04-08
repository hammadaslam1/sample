import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{position: 'unset !important'}}>
      <Toolbar
        sx={{
          display: "flex",
          backgroundColor: "#3f3d37",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: "Krona one" }}>
          ToDo App
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Krona one" }}>
          Hammad Aslam
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
