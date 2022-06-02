import React from "react";
import './Verify.scss'

import {VerifyCenterDiv} from './VerifyCenterDiv'


import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

export const Verify = () => {
    return <div className="verify">

        <Header/>

        <VerifyCenterDiv/>
        <Footer/>
        
    </div>
}