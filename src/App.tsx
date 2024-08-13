import { HomePage } from "./pages/HomePage";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
