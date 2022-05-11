import React from "react";
import './SignUpPage.css';

import {SignUpCenterBox} from './SignUpCenterBox'
import {PageTittle} from "../components/PageTittle";
import {Header} from '../Header'
import {Footer} from '../Footer'

export const SignUpPage = (() => {
    return <div className="SignUp">
        <Header headerUser='ArtemPurenok'/>
        <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='Sign Up' pageTitleGeneralDiv='SignUp-page-tittle'/>
        <SignUpCenterBox/>
        <Footer/>
    </div>
})