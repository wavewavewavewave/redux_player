import React from 'react'
import "./Playlist.css"
import PlayItem from './PlayItem/PlayItem'
import {useSelector} from "react-redux";


const Playlist = () => {
    const isDeleted = false
    const {songs} = useSelector(state => state.player)

    const playlist = songs
        .sort((s1, s2) => s1.id - s2.id)
        .map((song, index) => (
            <PlayItem
                id={song.id}
                index={index}
                artist={song.artist}
                tittle={song.tittle}
                key={song.key}
                song={song}
                isDeleted={isDeleted}
            />
        ))

    return (
        <div className={'playlist'}>
            {playlist}
        </div>
    )
}

export default Playlist
