import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navigator.css'

const Navigator = () => {
    return (
        <nav className={'navigator'}>
            <NavLink activeClassName={'active'} to="/playlist">Playlist</NavLink>
            <NavLink activeClassName={'active'} to="deleted-songs">Deleted Songs</NavLink>
        </nav>
    )
}

export default Navigator
