import React from 'react'
import "./NoMusicContent.css"


const NoMusicContent = (props) => {
    return (
        <h1 className={"no-music"}>{props.children}</h1>
    )
}

export default NoMusicContent