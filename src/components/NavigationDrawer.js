import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { fontWeight } from "@mui/system";
import { useState } from "react";
import { Button } from "@mui/material";
import "./styles.css";

export const NavigationDrawer = () => {
  const drawerWidth = 240;
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        // referencing paper inside drawer component
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          // paddingLeft: "2rem",
          display: "flex",
          justifyContent: "center",
          border: "none",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {["New", "Trending", "Genres", "Search"].map((text, index) => (
            <ListItem alignItems="center" key={text} disablePadding>
              <Button
                className="drawer-button"
                variant="text"
                sx={{
                  textTransform: "none",
                  my: "1rem",
                  paddingLeft: "2rem",
                  color: "#14213d61",
                  fontSize: "1.35rem",
                  fontWeight: "bold",
                  "&:focus": {
                    color: "#14213D",
                  },
                  // "&:hover": {
                  //   color: "black",
                  // },
                }}
              >
                <span>{text}</span>
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
