import React from 'react'
import AppRoutes from './Routing/CarRoutes.jsx';
import Navbar from './Component/header/Navbar.jsx';
import Home from './Component/Home/Home.jsx';

const App = () => {
  return (
    <>
      {/* <AppRoutes/> */}
      <Navbar />
      <Home />
    </>
  )
}

export default App;
