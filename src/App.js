import React,{ useState } from 'react';
import './App.css';
import Card from './Components/Card';
import CardProfileFront from './Components/CardProfileFront';
import CardProfileBack from './Components/CardProfileBack';

function App() {

  const [cardInfo, setCardInfo] = useState({
    name:"JANE APPLESEED",
    cardnumber:"0000 0000 0000 0000",
    month:'00',
    year:'00',
    cvc:'123'
  });

  return (
        <>
          <div className='container'>
            <div className='leftside'></div> 
            <div className='rightside'>
              <Card onUpdateCardInfo={(newCradInfo)=>
              setCardInfo(newCradInfo)
              }/>
            </div>
            <CardProfileFront {...cardInfo}/>
            <CardProfileBack {...cardInfo}/>
          </div>
        </>
  )
}

export default App;
