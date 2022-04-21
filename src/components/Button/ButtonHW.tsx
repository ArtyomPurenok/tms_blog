import React from 'react'
import './ButtonHW.css'


interface IImage {
    flag: string,
    likeUp: string,
    likeDown: string,
}

interface ITextObjectInBTN {
    textOne: string,
    textTwo: string, 
    textThree: string, 
    textFour: string,
}

interface IObjClassNames {
    classNameOne: string,
    classNameTwo: string,
    classNameThree: string,
    classNameFour: string,
    classNameFive: string,
    classNameSix: string,
    classFlag: string
}
type BTNProps = {
    textObjectInBTN: ITextObjectInBTN,
    objClassNames: IObjClassNames,
    textClick: any,
    block: boolean,
    image: IImage
}



export const ButtonHomeWork = ({textObjectInBTN, objClassNames, textClick, block, image}: BTNProps) => {
    return (
        <div>
        <button disabled={block} onClick={textClick} className={objClassNames.classNameOne}>{textObjectInBTN.textOne}</button>
        <button onClick={textClick} className={objClassNames.classNameTwo}>{textObjectInBTN.textTwo}</button>
        <button onClick={textClick} className={objClassNames.classNameThree}>{textObjectInBTN.textThree}</button>
        <button onClick={textClick} className={objClassNames.classNameFour}><img className={objClassNames.classFlag} src={image.flag}/>{textObjectInBTN.textFour}</button>
        <button onClick={textClick} className={objClassNames.classNameFive}><img src={image.likeUp}/></button>
        <button onClick={textClick} className={objClassNames.classNameSix}><img src={image.likeDown}/></button>
        </div>
    )
}