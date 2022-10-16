import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Lato"
  },
  palette: {
    primary: {
      main: "rgb(120 98 217)",
      contrastText: "#fff",
    },
  },
});

export default theme;
