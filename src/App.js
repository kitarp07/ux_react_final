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
import  TripDetail  from "./components/TripDetail";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Khalti from "./components/Khalti/Khalti";
import Account from "./components/Account";
import StayDetail from "./components/StayDetail";
import CheckoutStay from "./components/CheckoutStay";
function App() {
  return (
    <>
      <Router>
        
        <Routes>
        <Route  path='' element={<Navigate to="/home" replace={true} />}/>
        <Route path='/trip-detail/:id' element={< TripDetail />} />
        <Route path='/accommodation-detail/:id' element={< StayDetail />} />
        <Route path='/home' element={< Home />} />
        <Route path='/checkout/trip/:id' element={<Checkout/>}/>
        <Route path='/checkout/stays/:id' element={<CheckoutStay/>}/>
        <Route path='/khalti' element={<Khalti/>}/>
        <Route path='/account' element={<Account/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
