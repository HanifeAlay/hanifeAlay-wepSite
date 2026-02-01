import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../style/Navbar.css";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className="navbar"
      sx={{
        backgroundColor: "rgba(10,10,14,0.55)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",

       
      }}
    >
      <Toolbar className="navbar__toolbar">
        {/* Sol */}
        <Box className="navbar__left">
          <span className="navbar__logo">Hanife Alay</span>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Sağ */} 
        <Button
          href="#iletisim"
          variant="contained"
          className="navbar__btn"
          sx={{
            textTransform: "none",
            fontWeight: 700,
            borderRadius: "999px",
            px: 2.2,
            background: "rgba(120,160,255,0.35)",
            border: "1px solid rgba(140,180,255,0.35)",
            boxShadow: "none",
            "&:hover": { background: "rgba(120,160,255,0.45)" },
          }}
        >
          İletişime Geç
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;