import React from "react";
import './NavPanelBtn.scss';



type PropsForBtn = {
    content: any
}

export const NavPanelContent = ({content}: PropsForBtn) => {
    return <div className="nav-panel-content">

            <div>{content}</div> 

        </div>




    // return <div className="nav-panel-btn">
    //     <Button btnClass='nav-panel-btn__btn' btnTxt={name}/>
    // </div>
}