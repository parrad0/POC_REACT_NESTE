import { Chip, Grid, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";
import React from "react";
import { editMenu, setHighlight } from "../redux/reducer/app";

const TableTab = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((app) => app.app.data);
  return (
    <Grid container sx={{ backgroundColor: "white" }}>
      {data.map((sample) => (
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={4}
            sx={{ alignItems: "center", mb: "1rem", ml: "1rem", mt: "1rem" }}
            onClick={() => {
              dispatch(setHighlight(sample));
              dispatch(editMenu());
            }}
          >
            <p>{sample}</p>
            <Chip label="Delete" />
            <Chip label="Update" />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
export default TableTab;
