import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
