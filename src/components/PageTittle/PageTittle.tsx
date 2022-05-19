import React from "react";
import './PageTittle.scss'

type PageTitleProps = {
    pageTitleComeHome?: string
    pageTitleTxt: string
    pageTitleGeneralDiv?: string
}

export const PageTittle = ({pageTitleComeHome, pageTitleTxt, pageTitleGeneralDiv}:PageTitleProps ) => {
    return <div className={`page-title ${pageTitleGeneralDiv}`}>

             {pageTitleComeHome && <p className="page-title__comeHome">{pageTitleComeHome}</p>}
             <h1 className="page-title__txt">{pageTitleTxt}</h1>

           </div>

}