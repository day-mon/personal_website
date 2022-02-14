import React from 'react';
import Console from "./components/Console";
import Header from "./components/Header";
import './styles/App.css'
import Footer from "./components/Footer";

const App = () => {
  return (
      <div className={"wrapper"}>
          <Header />
          <Console />
          <Footer />
      </div>
  )
}

export default App;
