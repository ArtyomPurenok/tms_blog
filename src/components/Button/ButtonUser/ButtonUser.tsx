import React from "react"
import './ButtonUser.scss'

type Props = {
    className?: string
    userName?: any
}

export const ButtonUser = ({className, userName}: Props) => {
    return <div>
        <button className={`btn-user ${className}`}>
            <div className='btn-user__short-name'><p>{userName.slice(0,2)}</p></div>
            <p>{userName}</p>
        </button>
    </div>
}