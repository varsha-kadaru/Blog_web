import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/pages/home/Home.jsx";
import Settings from "./components/pages/settings/Settings.jsx";
import Single from "./components/pages/single/single.jsx";
import Write from "./components/pages/write/write.jsx";
import Login from "./components/pages/login/login.jsx";
import About from "./components/pages/about/about.jsx";
import Register from "./components/pages/register/register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context.js";

function App() {
  const {user}=useContext(Context);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login/>}/> {/* Wrap Home component with Route */}
        <Route path="/posts"  element={user ? <Home /> : <Login/>} /> {/* Wrap Home component with Route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={user?<Write/>:<Login />} />
        <Route path="/settings" element={user?<Settings />:<Login/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
