import React, { useEffect, useState } from 'react'
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as MenuIcon } from '../../components/Icons/MenuIcon.svg'
import { ReactComponent as SearchIcon } from '../../components/Icons/Search.svg'
import { ReactComponent as CancelIcon } from './components/HeaderIcon/CancelIcon.svg'
import { ReactComponent as UserIcon } from './components/HeaderIcon/UserIcon.svg'

import {Button} from '../Button'
import {HeaderBurger} from './HeaderBurger'
import { ButtonUser } from "../Button/ButtonUser"


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


    //User
    const [user, setUser] = useState('not');
    const userData = useSelector((state: any) => state.tokens.user);
    const navigate = useNavigate();
    

    useEffect(() => {        
        if (userData.userName != null) {           
            setUser('ok')
        }else {setUser('not')}
    }, [userData.userName])


    const registerUser = () => {navigate('/signIn')}


    return <div className='general-header-div'>
        <div className='header'>
            <div className='header__left'>
                <Button className={'header__btn-menu'} Icon={menuIcon()} onClick={Burger}/>
            </div>

            <div className='header__right'>
                <Button className={'header__btn-seach'} Icon={SearchIcon}/>
                {user == 'ok' && <ButtonUser userName={userData.userName} className='header__btn-user'/>}
                {user == 'not' && <Button className={'header__user-icon'} Icon={UserIcon} onClick={registerUser}/>}
            </div>
        </div>

        <HeaderBurger typeDisplay={displayBurger}/>
    </div>
}
