import React from "react";
import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/fields">
          <ListItemText primary="Fields" />
        </ListItem>
        <ListItem button component={Link} to="/inventory">
          <ListItemText primary="Inventory" />
        </ListItem>
        <ListItem button component={Link} to="/marketplace">
          <ListItemText primary="Marketplace" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
