import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Button } from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";

export const drawerWidth = 240;
export const NavigationDrawer = () => {
  const links = [
    { name: "New", link: "/",focusOnDefault:true,},
    { name: "Trending", link: "/trending" ,focusOnDefault:false,},
    { name: "Genres", link: "/genres" ,focusOnDefault:false,},
    { name: "Search", link: "/search" ,focusOnDefault:false,},
  ];
  
  

  return (<Drawer
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
              backgroundColor: 'black'
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {links.map((link) => (
                <ListItem alignItems="center" key={link.name} disablePadding>
                  <Link to={link.link}>
                    <Button
                      autoFocus={link.focusOnDefault}
                      style={{
                        
                      }}
                      className="drawer-button"
                      variant="text"
                      sx={{
          
                        textTransform: "none",
                        my: "1rem",
                        paddingLeft: "2rem",
                        color: "white",
                        fontSize: "1.35rem",
                        fontWeight: "bold",
                        "&:focus": {
                          color: "#14213D",
                          backgroundColor: "#fca311",
                        },
                        // "&:hover": {
                        //   color: "black",
                        // },
                      }}
                    >
                      <span>{link.name}</span>
                    </Button>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
  );
};
