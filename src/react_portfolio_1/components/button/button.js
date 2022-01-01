import React from 'react'


import './button.css'
import {Button} from '@material-ui/core'

const CustomButton = ({text , icon}) => {
    return (
        <Button className = 'profile-button' 
        endIcon={icon ? 
            (<div className = 'button-icon-container'>{icon}</div>): 
            null}>
                <span className = 'button-text'> { text }</span>
        </Button>
    )
}

export default CustomButton;
