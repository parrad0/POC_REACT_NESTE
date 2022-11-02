import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import TableTab from "./components/cardTab";
import Menu from "./components/menu";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hook";
import { editMenu } from "./redux/reducer/app";

function App() {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((app) => app.app.editMenu);
  const highlightText = useAppSelector((app) => app.app.highlightData);
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={3}>
        <Menu />
      </Grid>
      <Grid item xs={9} sx={{ backgroundColor: "blue" }}>
        <TableTab />
      </Grid>
      <Drawer anchor={"right"} open={menu} onClose={() => dispatch(editMenu())}>
        <List>
          <ListItem key={"right"} disablePadding>
            <ListItemButton>
              <ListItemText primary={highlightText} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Grid>
  );
}

export default App;
