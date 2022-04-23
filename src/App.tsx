import React from 'react';
import { InputField } from './Input'

function App() {
  return (
    <div className="App">
     <InputField 
     text="Title"

     classGeneral="general"

     block={true}

     classTitle={{
       titOne: 'titOne',
       titTwo: 'titTwo',
     }}
     classNM={{
       inpOne: 'inpOne',
       inpTwo: 'inpTwo',
       inpThree: 'inpThree',
       inpFour: 'inpFour',
       inpFive: 'inpFive',
     }}/>
    </div>
  );
}

export default App;
