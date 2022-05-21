import React from "react";
import './PageTittle.scss';
import {Link} from 'react-router-dom';

type PageTitleProps = {
    pageTitleComeHome?: string
    pageTitleTxt: string
    pageTitleGeneralDiv?: string
}

export const PageTittle = ({pageTitleComeHome, pageTitleTxt, pageTitleGeneralDiv}:PageTitleProps ) => {
    return <div className={`page-title ${pageTitleGeneralDiv}`}>

             {pageTitleComeHome && <a href="/" className="page-title__comeHome">{pageTitleComeHome}</a>}
             <h1 className="page-title__txt">{pageTitleTxt}</h1>

           </div>

}
