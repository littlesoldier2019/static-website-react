import React from 'react';
import './App.css';
import './Header.css'
import Header from './Header';

function App()
{
  return (
    <div className='wrapper'>
      <div className="head">
        <div className="container">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
