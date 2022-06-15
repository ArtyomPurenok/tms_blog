import React from "react";
import './TabsContent.scss';



type PropsForBtn = {
    content: any
}

export const TabsContent = ({content}: PropsForBtn) => {
    return <div className="nav-panel-content">

            <div>{content}</div> 

        </div>
}