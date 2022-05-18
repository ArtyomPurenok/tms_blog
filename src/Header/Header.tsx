import React, { useState } from 'react';
import './Header.scss';

import {Button} from '../components/Button';
import {HeaderBurger} from './HeaderBurger';

import { ReactComponent as MenuIcon } from '../components/Icons/MenuIcon.svg';
import { ReactComponent as SearchIcon } from '../components/Icons/Search.svg';
import { ReactComponent as CancelIcon } from './components/HeaderIcon/CancelIcon.svg';

type HeaderProps = {
    headerUser?: string
    headerUserIcon?: string

}

export const Header = ({headerUser, headerUserIcon}: HeaderProps) => {
    const [stateBurger, setStateBurger] = useState('Close');
    const [displayBurger, setDisplayBurger] = useState('none');

    function Burger() {
        if(stateBurger === "Close") {
            setStateBurger('Open');
            setDisplayBurger('block');
        }
        if(stateBurger === "Open") {
            setStateBurger('Close');
            setDisplayBurger('none');
        }
    }

    function menuIcon() {
        if(stateBurger === "Close") {
            return MenuIcon
        }else if(stateBurger === "Open") {
            return CancelIcon
        }

    }


    return <div>
        <div className='header'>
        <div className='header__left'>
            <Button btnClass={'header__btn-burger'} BtnIcon={menuIcon()} functionLikeNumber={Burger}/>
            <hr className='header__hr'/>
        </div>
        <div className='header__right'>
            <hr className='header-hr'/>
            <Button btnClass={'header__btn-seach'} BtnIcon={SearchIcon}/>
            <hr className='header__hr'/>
            {headerUser && <Button btnClass={'header__btn-user-name'} btnTxt={headerUser}/>}
            {headerUserIcon && <Button btnClass={'header__user-icon'} BtnIcon={headerUserIcon}/>}
            
        </div>
        </div>
        <HeaderBurger typeDisplay={displayBurger}/>
    </div>
}