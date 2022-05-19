import React from "react";
import './SignInCenterDiv.scss';

import {SignInInputBox} from './SignInInputBox';
import {SignInButtonBox} from './SignInButtonBox';
import {PageTittle} from "../../../components/PageTittle";

export const SignInCenterDiv = () => {
    return <div className="signIn-center-box">

        <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='Sign In'/>   

        <div className="signIn-center-div">
        <SignInInputBox/>
        <SignInButtonBox/>
        </div>

    </div>
}