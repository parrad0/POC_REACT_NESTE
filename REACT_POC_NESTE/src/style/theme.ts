/* eslint-disable import/prefer-default-export */
import { PaletteMode } from "@mui/material";

const designTheme = (mode: PaletteMode) => ({
  palette: {
    primary: { main: "#FF5733" },
    secondary: { main: "#FFFFFF" },
  },
  typography: {
    fontFamily: ["'Avenir'"].join(","),
    body1: { fontSize: "1.1rem" },
    body2: { fontSize: "1rem", color: "black" },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  components: {},
});
export default designTheme;
