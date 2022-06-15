import React, { useEffect } from "react"
import './SignUp.scss';
import { useNavigate } from "react-router-dom"

import {SignUpCenterBox} from './SignUpCenterBox'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'


export const SignUp = () => {



    return <div className="signUp">
        <SignUpCenterBox/>
    </div>
}