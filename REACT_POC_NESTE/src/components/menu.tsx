import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Menu = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "black", height: "100%" }}>
      <Stack direction="column" spacing={2}>
        <Typography sx={{ color: "white" }} onClick={() => console.log("test")}>
          First Menu
        </Typography>
        <Typography sx={{ color: "white" }}>Second Menu</Typography>
      </Stack>
    </Box>
  );
};
export default Menu;
