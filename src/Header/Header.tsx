import React from 'react';
import './Header.scss';

import {Button} from '../components/Button'

import { ReactComponent as MenuIcon } from '../components/Icons/MenuIcon.svg'
import { ReactComponent as SearchIcon } from '../components/Icons/Search.svg'

type HeaderProps = {
    headerUser?: string
    headerUserIcon?: string
}

export const Header = ({headerUser, headerUserIcon}: HeaderProps) => {
    

    return <div className='header'>
        <div className='header__left'>
            <Button btnClass={'header__btn-burger'} BtnIcon={MenuIcon}/>
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
}