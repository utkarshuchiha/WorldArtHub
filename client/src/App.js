import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/HomePage";
import Footer from "./components/Footer";
import Generate from "./components/Generate";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoginState from "./context/loginstatus/loginState";
import AllCard from "./components/AllCard";

function App() {
  return (
    <LoginState>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create-post" element={<Generate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/all-posts" element={<AllCard/>}/>
        </Routes>
        <Footer />
      </Router>
    </LoginState>
  );
}

export default App;
