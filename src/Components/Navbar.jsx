import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Grow,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#4365D0", borderRadius: "14px", p: 1, zIndex: 50 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src="logo.png"
          alt="logo"
          sx={{ width: { xs: "50px", sm: "80px" } }}
        />

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
          {["Dashboard", "Courses", "Learnings", "Community"].map((item) => (
            <Typography
              key={item}
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* User Icons (Desktop Only) */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="usericon.png"
            alt="userIcon"
            sx={{ width: "50px" }}
          />
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={handleMenuToggle}
          sx={{ display: { sm: "none" } }}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Full-Screen Mobile Menu with Animation */}
      <Grow in={menuOpen}>
        <Paper
          elevation={4}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            bgcolor: "#4365D0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 50,
          }}
        >
          {/* Close Button */}
          <IconButton
            sx={{ position: "absolute", top: 30, right: 45, color: "white" }}
            onClick={handleMenuToggle}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </IconButton>

          {/* Menu Items */}
          {["Dashboard", "Courses", "Learnings", "Community"].map((item) => (
            <MenuItem
              key={item}
              onClick={handleMenuToggle}
              sx={{ color: "white", fontSize: "22px", py: 2 }}
            >
              {item}
            </MenuItem>
          ))}
        </Paper>
      </Grow>
    </AppBar>
  );
};

export default Navbar;
