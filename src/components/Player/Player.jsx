import React, {useEffect, useRef} from 'react'
import "./Player.css"
import Controls from "./Controls/Controls";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import {useSelector} from "react-redux";

const Player = () => {
    const audioEl = useRef(null)

    const { currentSongIndex, songs,isPlaying } = useSelector(state => state.player)

    useEffect(() => {
        if(isPlaying){
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    })

    return (
        <div className={'player'}>
            <div className={'player-content'}>
                <audio
                    src={songs.length > 0 ? songs[currentSongIndex].audio : null}
                    ref={audioEl}
                ></audio>
                <Controls/>
                <PlayerDetails/>
            </div>
        </div>
    )
}

export default Player

