import { Routes } from "services/routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@mui/material/styles";
import "styles/globals.scss";

const theme = createMuiTheme();

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
