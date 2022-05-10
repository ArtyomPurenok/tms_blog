import React from 'react';
import './Header.css';

import {Button} from '../components/Button'

import { ReactComponent as MenuIcon } from '../components/Icons/MenuIcon.svg'
import { ReactComponent as SearchIcon } from '../components/Icons/Search.svg'

type HeaderProps = {
    headerUser?: string
    headerUserIcon?: string
}

export const Header = (({headerUser, headerUserIcon}: HeaderProps) => {
    

    return <div className='header'>
        <div className='header-Left'>
            <Button btnClass={'header-Btn-Burger'} BtnIcon={MenuIcon}/>
            <hr className='header-Hr'/>
        </div>
        <div className='header-Right'>
            <hr className='header-Hr'/>
            <Button btnClass={'header-Btn-Seach'} BtnIcon={SearchIcon}/>
            <hr className='header-Hr'/>
            {headerUser && <Button btnClass={'header-User'} btnTxt={headerUser}/>}
            {headerUserIcon && <Button btnClass={'header-User-Icon'} BtnIcon={headerUserIcon}/>}
            
        </div>


    </div>
})