import React from "react";
import './SignUp.scss';

import {SignUpCenterBox} from './SignUpCenterBox';

import {Header} from '../../Header';
import {Footer} from '../../Footer';

export const SignUp = () => {
    return <div className="signUp">
        <Header/>
        <SignUpCenterBox/>
        <Footer/>
    </div>
}