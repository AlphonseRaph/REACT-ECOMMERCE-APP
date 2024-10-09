
import './App.css'
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
      <div className="nav-container">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" /> 
        <Route path="/cart" />
      </Routes> 
    </div> 
    </Router>
  );

}
export default App
