import { useState } from 'react'
import React from 'react';
import '../Astronauts/AstronautsCSS/AstronautsCardThree.css'
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

interface IClassesCardThree {
    textOne: string,
    textTwo: string,
    image: string,
}

type el = {
    classesCardThree: IClassesCardThree
    img: IImages
}

export const AstronautСardThree = ({classesCardThree, img}: el) => {



    return <div>

    <div className='generalCardThree'>
    <div className='CardThree'>

    <div>
      <p className={classesCardThree.textOne}>April 20, 2021</p>
      <h1 className={classesCardThree.textTwo}>Astronauts prep for new<br/> solar arrays on nearly<br/> seven-hour spacewalk</h1>
      <p className={classesCardThree.textOne}>Astronauts Kayla Barron and Raja Chari floated out of the<br/> International Space Station airlock for a spacewalk<br/> Tuesday, installing brackets and struts to support new<br/> solar arrays to upgrade the research lab's power system on<br/> the same day that crewmate Mark Vande Hei marked his<br/> 341st day in orbit, a U.S. record for a single spaceflight.</p>
    </div>

    <div><img className={classesCardThree.image} src={img.AstronautPhotoOne}/></div>

    </div>
    <div className='ButtonsCardThree'><div><ButtonLikeUp img={img.LikeUp}/><ButtonLikeDown img={img.LikeDown}/></div><div><Flag img={img.Flag}/><Dots img={img.Dots}/></div></div>
    <hr className='CardThreeline'/> 
    </div>






    </div>}