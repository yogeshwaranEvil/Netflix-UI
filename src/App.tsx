import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Netflix from "./component/netflix";
import Palyer from "./component/Palyer";
import Befor from "./component/Befor";
import bg from "./assets/login.jpg";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useState } from "react";
import logo from "./assets/logo.webp";


const ProtectedRoute = ({ component, ...args }: any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

function App() {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(()=>!showNav);
  };

  return (
    
    <Router>
          {showNav && (
            <div
            className=" h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}>
          <div className="bg-black h-screen bg-opacity-65 ">
    
            
              <img src={logo} className="h-[100px]  px-11"></img>
            <div className=" flex flex-col items-center  justify-center" >
            <nav className=" mt-[100px] flex items-center flex-col gap-6">
              <p className="text-white text-6xl font-bold ">Unlimited movies, TV</p>
              <p className="text-white text-6xl font-bold -mt-6"> shows and more</p>

              <ul>
                <li className="'text-black mx-20 bg-red-600 px-4 hover:bg-black hover:text-white hover: border-red-600 border-2" >
                  <Link to="/netflix" onClick={toggleNav}>SignUp/Login</Link>
                </li>
                
              </ul>
            </nav>
            </div>
            </div>
            
    </div>
          )}
      
        <Routes >
        <Route path="/player" element={<ProtectedRoute  component={Palyer} />} />
          <Route path="/Before" element={<ProtectedRoute component={Befor} />} />
          <Route path="/netflix" element={<ProtectedRoute component={Netflix} />} />
        </Routes>
      </Router>
  );
}


export default App;
