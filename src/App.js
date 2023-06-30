import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
  useMatch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Icons from "./components/Icons";
import "./components/Navbar.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      
      <Router>

      <Navbar />
      <Icons />
      <Cards />
        {/* <Link>Login</Link>
        <Link>Register</Link>
        <Link>Home</Link> */}
      </Router>
    </>
  );
}

export default App;
