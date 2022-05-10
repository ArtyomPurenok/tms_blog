import React from 'react';
import './Header.css';

import {Button} from '../components/Button'

import { ReactComponent as MenuIcon } from '../components/Icons/MenuIcon.svg'
import { ReactComponent as SearchIcon } from '../components/Icons/Search.svg'

type HeaderProps = {
    HeaderUser?: string
    HeaderUserIcon?: string
}

export const Header = (({HeaderUser, HeaderUserIcon}: HeaderProps) => {
    

    return <div className='header'>
        <div className='headerLeft'>
            <Button BtnClass={'HeaderBtnBurger'} BtnIcon={MenuIcon}/>
            <hr className='HeaderHr'/>
        </div>
        <div className='headerRight'>
            <hr className='HeaderHr'/>
            <Button BtnClass={'HeaderBtnSeach'} BtnIcon={SearchIcon}/>
            <hr className='HeaderHr'/>
            {HeaderUser && <Button BtnClass={'HeaderUser'} BtnTxt={HeaderUser}/>}
            {HeaderUserIcon && <Button BtnClass={'HeaderUserIcon'} BtnIcon={HeaderUserIcon}/>}
            
        </div>


    </div>
})