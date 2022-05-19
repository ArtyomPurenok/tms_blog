import React from "react";
import './SignUpPage.scss';

import {SignUpCenterBox} from './SignUpCenterBox';
import {PageTittle} from "../../components/PageTittle";
import {Header} from '../../Header';
import {Footer} from '../../Footer';

export const SignUp = () => {
    return <div className="signUp">
        <Header headerUser='ArtemPurenok'/>
        <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='Sign Up' pageTitleGeneralDiv='signUp__page-tittle'/>
        <SignUpCenterBox/>
        <Footer/>
    </div>
}