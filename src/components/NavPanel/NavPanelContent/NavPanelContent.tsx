import React from "react";
import './NavPanelContent.scss';



type PropsForBtn = {
    content: any
}

export const NavPanelContent = ({content}: PropsForBtn) => {
    return <div className="nav-panel-content">

            <div>{content}</div> 

        </div>
}