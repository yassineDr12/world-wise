import { FC, useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Box, useTheme, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../contexts/ThemeContext";

const navStyle = ({
  isActive,
  isPending,
  isTransitioning,
}: {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
}) => {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "red" : "white",
    viewTransitionName: isTransitioning ? "slide" : "",
    textDecoration: "none",
  };
};

const Header: FC = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <AppBar position="static" color="primary" elevation={10}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <NavLink to="/" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img src={logo} alt="WorldWise Logo" style={{ marginRight: "10px", height: "40px" }} />
            <Typography variant="h6">WorldWise</Typography>
          </NavLink>
        </Box>
        <Button>
          <NavLink to="/about" style={navStyle}>
            ABOUT
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/pricing" style={navStyle}>
            PRICING
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/tracker" style={navStyle}>
            TRACKER
          </NavLink>
        </Button>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
