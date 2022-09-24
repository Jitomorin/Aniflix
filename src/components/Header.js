import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Aniflix_trans from "../resources/aniflix_trans.svg";
import Button from "@mui/material/Button";
import './styles.css'

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{zIndex:1300, backgroundColor: "transparent", color: "black" }}
      >
        <Toolbar>
          <Button
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            
            <img className="logo" src='../resources/logo.png' alt="Aniflix" />

          </Button>
          
         
        </Toolbar>
      </AppBar>
    </Box>
  );
};
