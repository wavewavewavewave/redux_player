import React from 'react'
import  "./Button.css"


const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`${'btn'} ${!props.isDeleted ? 'delete' : 'add'}`}
        >
            {props.children}
        </button>
    )
}

export default Button
