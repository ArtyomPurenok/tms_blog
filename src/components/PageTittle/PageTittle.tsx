import React from "react";
import './PageTittle.css'

type PageTitleProps = {
    pageTitleComeHome?: string
    pageTitleTxt: string
}

export const PageTittle = (({pageTitleComeHome, pageTitleTxt}:PageTitleProps ) => {
    return <div className="page-title-general-div">

             {pageTitleComeHome && <p className="page-title-comeHome">{pageTitleComeHome}</p>}
             <h1 className="page-title-txt">{pageTitleTxt}</h1>

           </div>


})