import React from "react";
import './FunctionDiv.scss';

import {Button} from '../../../Button';
import {ReactComponent as SunIcon} from '../../components/HeaderIcon/SunIcon.svg';
import {ReactComponent as MoonIcon} from '../../components/HeaderIcon/MoonIcon.svg';

export const FunctionDiv = () => {
    return <div>
        
            <div className="function-div__theme">
                <Button className='function-div__btn-light' Icon={SunIcon} divClass='function-div__btn-div'/>
                <Button className='function-div__btn-dark' Icon={MoonIcon} divClass='function-div__btn-div'/>
            </div>
               <Button className='function-div__logOut' txt='Log Out'/>
        </div>
}