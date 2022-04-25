import React from 'react';
import './App.css';

import { AstronautСardOne } from './Astronauts'
import { AstronautСardTwo } from './Astronauts'
import { AstronautСardThree } from './Astronauts'
import { AstronautСardFour } from './Astronauts'
import { AstronautСardFive } from './Astronauts'

import { AstrOneColownTwo } from './AstronautColownTwo'
import { AstrTwoColownTwo } from './AstronautColownTwo'
import { AstrThreeColownTwo } from './AstronautColownTwo'
import { AstrFourColownTwo } from './AstronautColownTwo'
import { AstrFiveColownTwo } from './AstronautColownTwo'

import AstronautImageFirst from '../src/Components/images/AstronautImageFirst.svg'
import AstronautImageSecond from '../src/Components/images/AstronautImageSecond.svg'

import LikeUp from '../src/Components/images/LikeUp.png'
import LikeDown from '../src/Components/images/LikeDown.png'
import Flag from '../src/Components/images/Flag.png'
import Dots from '../src/Components/images/Dots.png'

function App() {
  return (
    <div className="App">
      <div className='ColownOne'>
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

      <AstronautСardFive
       classesCardFive={{
        textOne: 'CardFiveTextOne',
        textTwo: 'CardFiveTextTwo',
        image: 'CardFiveAstronautPhoto'
      }}

      img={{
        AstronautPhotoOne: AstronautImageFirst,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
       }}
       />         </div>

      <div className='ColownTwo'>
      <AstrOneColownTwo

        img={{
        AstronautPhotoTwo: AstronautImageSecond,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
        }}
      /> 

      <AstrTwoColownTwo

        img={{
        AstronautPhotoTwo: AstronautImageSecond,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
        }}
      /> 

      <AstrThreeColownTwo

        img={{
        AstronautPhotoTwo: AstronautImageSecond,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
        }}
      /> 

      <AstrFourColownTwo

        img={{
        AstronautPhotoTwo: AstronautImageSecond,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
        }}
      /> 

      <AstrFiveColownTwo

        img={{
        AstronautPhotoTwo: AstronautImageSecond,
        LikeUp: LikeUp,
        LikeDown: LikeDown,
        Flag: Flag,
        Dots: Dots,
        }}
      /> 
               </div>



    </div>


  );
}

export default App;
