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
            <Button className={'header__btn-burger'} Icon={MenuIcon}/>
            <hr className='header__hr'/>
        </div>
        <div className='header__right'>
            <hr className='header-hr'/>
            <Button className={'header__btn-seach'} Icon={SearchIcon}/>
            <hr className='header__hr'/>
            {headerUser && <Button className={'header__btn-user-name'} txt={headerUser}/>}
            {headerUserIcon && <Button className={'header__user-icon'} Icon={headerUserIcon}/>}
            
        </div>


    </div>
}