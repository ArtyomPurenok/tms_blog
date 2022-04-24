import { useState } from 'react'
import './AstronautsCardFour.css'
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

interface IClassesCardFour {
    textOne: string,
    textTwo: string,
    image: string,
}

type el = {
    classesCardFour: IClassesCardFour
    img: IImages
}

export const AstronautСardFour = ({classesCardFour, img}: el) => {



    return <div>

    <div className='generalCardFour'>
    <div className='CardFour'>

    <div className='TextBox'>
      <p className={classesCardFour.textOne}>April 20, 2021</p>
      <h3 className={classesCardFour.textTwo}>Astronauts prep for new<br/> solar arrays on nearly<br/> seven-hour spacewalkввввввввqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqвввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввв</h3>
      <p className={classesCardFour.textOne}>Astronauts Kayla Barron and Raja Chari floated out of the<br/> International Space Station airlock for a spacewalk<br/> Tuesday, installing brackets and struts to support new<br/> solar arrays to upgrade the research lab's power system on<br/> the same day that crewmate Mark Vande Hei marked his<br/> 341st day in orbit, a U.S. record for a single spaceflight.</p>
    </div>

    <div><img className={classesCardFour.image} src={img.AstronautPhotoOne}/></div>

    </div>
    <div className='ButtonsCardFour'><div><ButtonLikeUp img={img.LikeUp}/><ButtonLikeDown img={img.LikeDown}/></div><div><Flag img={img.Flag}/><Dots img={img.Dots}/></div></div>
    <hr className='CardFourline'/> 
    </div>






    </div>}