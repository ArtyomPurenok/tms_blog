import React from "react";
import './SignUpCenterBox.scss';

import {SignUpInputsBox} from './SignUpInputsBox';
import {SignUpButtonBox} from './SignUpButtonBox';
import {PageTittle} from "../../../components/PageTittle";

export const SignUpCenterBox = () => {
    return <div className="signUp-center-box-general-div">

            <PageTittle pageTitleComeHome='Back to home' pageTitleTxt='Sign Up' pageTitleGeneralDiv='signUp__page-tittle'/>

            <div className="signUp-center-box">
                <SignUpInputsBox/>
                <SignUpButtonBox/>
            </div>

    </div>
}