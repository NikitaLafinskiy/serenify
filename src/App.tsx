import { Routes } from "services/routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "styles/globals.scss";

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
