import React from 'react';
import "./App.css";
import RecentWork from "./RecentWork";
import './App.css';
import './Header.css'
import Header from './Header';
import Section4 from './Section4.js';
import Footer from "./layout/Footer";
import SectionTwo from "./SectionTwo";

function App() {
  return (

    <div className="App">
        <div className='wrapper'>
          <div className="head">
            <div className="container">
              <Header />
              <SectionTwo/>
              <RecentWork />
              <Section4 />
              <Footer />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App
