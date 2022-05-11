import React from "react";
import './SignInCenterDiv.css'

import {SignInInputBox} from './SignInInputBox'
import {SignInButtonBox} from './SignInButtonBox'

export const SignInCenterDiv = (() => {
    return <div className="signIn-center-div">
        <SignInInputBox/>
        <SignInButtonBox/>
    </div>
})