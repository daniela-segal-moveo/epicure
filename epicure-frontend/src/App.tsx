import { HomePage } from "./pages/HomePage";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;