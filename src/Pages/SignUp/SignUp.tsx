import React from "react";
import './SignUp.scss';

import {SignUpCenterBox} from './SignUpCenterBox';

import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

export const SignUp = () => {
    return <div className="signUp">
        <Header/>
        <SignUpCenterBox/>
        <Footer/>
    </div>
}