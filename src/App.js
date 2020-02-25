import React from 'react';
import './App.css';
import './Header.css'
import Header from './Header';
import Section4 from './Section4.js';

function App()
{
  return (
    <div className='wrapper'>
      <div className="head">
        <div className="container">
          <Header />
        <Section4 />
        </div>
      </div>
    </div>
  );
}

export default App;
