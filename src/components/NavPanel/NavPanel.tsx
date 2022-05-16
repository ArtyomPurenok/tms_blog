import React from "react";
import './NavPanel.scss';

import {NavPanelBtn} from './NavPanelBtn';

export const NavPanel = (() => {
    function background() {
        return
    }

    



    return <div className="nav-panel">
        <hr className="nav-panel__hr"/>
        <NavPanelBtn name='All'/>
        <NavPanelBtn name='My favorites'/>
        <NavPanelBtn name='Popular'/>
    </div>
})