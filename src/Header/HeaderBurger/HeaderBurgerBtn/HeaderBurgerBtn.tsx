import React from "react";
import './HeaderBurgerBtn.scss';

import {HeaderBtn} from '../../components/HeaderBtn';
import {Button} from '../../../components/Button';
import {ReactComponent as SunIcon} from '../../components/HeaderIcon/SunIcon.svg';
import {ReactComponent as MoonIcon} from '../../components/HeaderIcon/MoonIcon.svg';

export const HeaderBurgerBtn = () => {
    return <div className="header-burger-btn">

        <div>
            <HeaderBtn txt='LikeBox' route='/LikeBox'/>
            <HeaderBtn txt='Search' route='/search'/>
        </div>


        <div>
            <div className="header-burger-btn__btns--theme">
                <Button btnClass='header-burger-btn__btn--light' BtnIcon={SunIcon} btnDivClass='header-burger-btn__btn-div'/>
                <Button btnClass='header-burger-btn__btn--dark' BtnIcon={MoonIcon} btnDivClass='header-burger-btn__btn-div'/>
            </div>
            <Button btnClass='header-burger-btn__btn--logOut' btnTxt='Log Out'/>
        </div>

    </div>
}