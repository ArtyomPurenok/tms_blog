import { useState } from 'react'
import React from 'react';
import '../Astronauts/AstronautsCSS/AstronautsCardTwo.css'
import { ButtonLikeUp } from '../Components/Button'
import { ButtonLikeDown } from '../Components/Button'
import { Flag } from '../Components/Button'
import { Dots } from '../Components/Button'

interface IImages {
    AstronautPhotoOne: string,
    LikeUp: string,
    LikeDown: string,
    Flag: string,
    Dots: string,
}

interface IClassesCardTwo {
    textOne: string,
    textTwo: string,
    image: string,
}

type el = {
    classesCardTwo: IClassesCardTwo
    img: IImages
}

export const AstronautСardTwo = ({classesCardTwo, img}: el) => {



    return <div>

    <div className='generalCardTwo'>
    <div className='CardTwo'>

    <div>
      <p className={classesCardTwo.textOne}>April 20, 2021</p>
      <h1 className={classesCardTwo.textTwo}>Astronauts prep for new<br/> solar arrays on nearly<br/> seven-hour spacewalk</h1>
      <p className={classesCardTwo.textOne}>Astronauts Kayla Barron and Raja Chari floated out of the<br/> International Space Station airlock for a spacewalk<br/> Tuesday, installing brackets and struts to support new<br/> solar arrays to upgrade the research lab's power system on<br/> the same day that crewmate Mark Vande Hei marked his<br/> 341st day in orbit, a U.S. record for a single spaceflight.</p>
    </div>

    <div><img className={classesCardTwo.image} src={img.AstronautPhotoOne}/></div>

    </div>
    <div className='ButtonsCardTwo'><div><ButtonLikeUp img={img.LikeUp}/><ButtonLikeDown img={img.LikeDown}/></div><div><Flag img={img.Flag}/><Dots img={img.Dots}/></div></div>
    <hr className='CardTwoline'/> 
    </div>






    </div>}