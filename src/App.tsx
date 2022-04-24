import React from 'react';
import { AstronautСardOne } from './Astronauts'
import { AstronautСardTwo } from './Astronauts'
import { AstronautСardThree } from './Astronauts'
import { AstronautСardFour } from './Astronauts'
import AstronautImageFirst from '../src/Components/images/AstronautImageFirst.png'
import LikeUp from '../src/Components/images/LikeUp.png'
import LikeDown from '../src/Components/images/LikeDown.png'
import Flag from '../src/Components/images/Flag.png'
import Dots from '../src/Components/images/Dots.png'

function App() {
  return (
    <div className="App">

      <AstronautСardOne 
      
      classesCardOne={{
        textOne: 'TextOne',
        textTwo: 'TextTwo',
        image: 'AstronautPhoto'
      }}

       img={{
        AstronautPhotoOne: AstronautImageFirst,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
       }}/>


       <AstronautСardTwo
       classesCardTwo={{
        textOne: 'CardTwoTextOne',
        textTwo: 'CardTwoTextTwo',
        image: 'CardTwoAstronautPhoto'
      }}

      img={{
        AstronautPhotoOne: AstronautImageFirst,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
       }}
       />


      <AstronautСardThree
       classesCardThree={{
        textOne: 'CardThreeTextOne',
        textTwo: 'CardThreeTextTwo',
        image: 'CardThreeAstronautPhoto'
      }}

      img={{
        AstronautPhotoOne: AstronautImageFirst,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
       }}
       />

      <AstronautСardFour
       classesCardFour={{
        textOne: 'CardFourTextOne',
        textTwo: 'CardFourTextTwo',
        image: 'CardFourAstronautPhoto'
      }}

      img={{
        AstronautPhotoOne: AstronautImageFirst,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
       }}
       />
    </div>
  );
}

export default App;
