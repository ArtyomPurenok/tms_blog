import React from "react";
import './NavPanelBtn.scss';

import {Button} from '../../../components/Button';

type PropsForBtn = {
    name: string
}

export const NavPanelBtn = ({name}: PropsForBtn) => {
    return <div className="nav-panel-btn">
        <Button btnClass='nav-panel-btn__btn' btnTxt={name}/>
    </div>
}