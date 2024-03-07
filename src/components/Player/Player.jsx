import React, {useEffect, useRef, useState} from 'react'
import "./Player.css"
import Controls from "./Controls/Controls";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import {useSelector} from "react-redux";

const Player = () => {
    const audioEl = useRef(null)
    const [currTime, setCurrTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)
    const [isVolumeOff, setIsVolumeOff] = useState(false)

    const {currentSongIndex, songs, isPlaying} = useSelector(state => state.player)
    let currSong = songs.find((song,index) => index === currentSongIndex)

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    })
    const onCanPlayHandler = e => {
        setDuration(e.target.duration)
    }
    const currTimeChangeHandler = event => {
        let compute = (event * duration) / 100
        setCurrTime(compute)
        audioEl.current.currentTime = compute
    }
    const volumeChangeHandler = event => {
        setVolume(event)
        audioEl.current.volume = event
        setIsVolumeOff(audioEl.current.volume === 0)
    }
    const volumeOffHandler = () => {
        setIsVolumeOff(!isVolumeOff)
    }

    return (
        <div className={'player'}>
            <div className={'player-content'}>
                <audio
                    src={songs.length > 0 ? songs[currentSongIndex].audio : null}
                    ref={audioEl}
                    onTimeUpdate={(e) => setCurrTime(e.target.currentTime)}
                    onCanPlay={onCanPlayHandler}
                ></audio>
                <Controls
                    audioCurrentTime={currTime}
                    setCurrTime={setCurrTime}
                    dur={duration}
                    currTimeChangeHandler={currTimeChangeHandler}
                />
                <PlayerDetails song={currSong}
                               volume={volume}
                               volumeChangeHandler={volumeChangeHandler}
                               isVolumeOff={isVolumeOff}
                               volumeOffHandler={volumeOffHandler}
                               setIsVolumeOff={setIsVolumeOff}/>
            </div>
        </div>
    )
}

export default Player

