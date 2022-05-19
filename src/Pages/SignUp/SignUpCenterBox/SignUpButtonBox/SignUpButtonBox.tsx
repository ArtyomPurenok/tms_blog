import React from "react";
import './SignUpButtonBox.scss';

import {Button} from '../../../../components/Button';

export const SignUpButtonBox = () => {
    return <div className="signUp-btn-box">
        <Button btnClass="signUp-btn-box__btn" btnTxt='Sign Up'/>
        <p className="signUp-btn-box__txt">Already have an account? <span className="signUp-btn-box__span">Sign In</span></p>
    </div>
}