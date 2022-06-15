import React, { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/main');
  // }, [])


  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
