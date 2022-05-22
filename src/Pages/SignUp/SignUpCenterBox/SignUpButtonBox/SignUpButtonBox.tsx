import React from "react";
import './SignUpButtonBox.scss';

import {Button} from '../../../../components/Button';

export const SignUpButtonBox = () => {
    return <div className="signUp-btn-box">
        <Button className="signUp-btn-box__btn" txt='Sign Up'/>
        <p className="signUp-btn-box__txt">Already have an account? <a href="/signIn" className="signUp-btn-box__span">Sign In</a></p>
    </div>
}