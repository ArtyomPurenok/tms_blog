import React from 'react';
import { ButtonHomeWork } from './components/Button';
import flag from '../src/components/Button/flag.png'
import likeUp from '../src/components/Button/likeUp.png'
import likeDown from '../src/components/Button/likeDown.png'


function App() {
  return (
    <div className="App">
    <ButtonHomeWork 
    objClassNames={
      {classNameOne: 'BTNOne',
       classNameTwo: 'BTNTwo',
       classNameThree: 'BTNThree',
       classNameFour: 'BTNFour',
       classNameFive: 'BTNFive',
       classNameSix: 'BTNSix',
       classFlag: 'flag',
      }
    }

    image={{
      flag: flag,
      likeUp: likeUp,
      likeDown: likeDown,
    }}

    block={true}

    textClick={() => console.log("Hello, React!")}

    textObjectInBTN={
      {textOne: 'Primary',
       textTwo: 'Secondary', 
       textThree: 'Secondary2', 
       textFour: '  Button with icon'
      }
    }

    />
    {/* <Button text={() => console.log("text")} myName="Artem" obj="asd" qwe={false}/> */}
    
    </div>
  );
}

export default App;
