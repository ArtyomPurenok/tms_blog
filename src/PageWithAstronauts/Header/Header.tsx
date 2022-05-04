import React from 'react';
import './Header.css';

import { ReactComponent as MenuIcon } from '../components/icons/MenuIcon.svg'
import { ReactComponent as Search } from '../components/icons/Search.svg'

export const Header = (() => {
    return <div className='divHeader'>
        <div className='headerLeft'>
            <hr/>
            <div className='headerBurger'><MenuIcon width='30%' height='30%'/></div>
            <hr/>
        </div>
        <div className='headerRight'>
            <hr/>
            <div className='headerSeach'><Search/></div>
            <hr/>
            <div className='headerUser'><p>Artem Purenok</p></div>
        </div>
    </div>
})