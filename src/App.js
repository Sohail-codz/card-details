import React from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
        <>
          <div className='container'>
            <div className='leftside'></div> 
            <div className='rightside'>
              <Card />
            </div>
          </div>
        </>
  )
}

export default App;
