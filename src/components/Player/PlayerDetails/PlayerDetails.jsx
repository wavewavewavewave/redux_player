import React from 'react'
import "./PlayerDetails.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons'

const PlayerDetails = (props) => {

    const onChangeHandler = e => {
        props.volumeChangeHandler(e.target.value / 100)
    }

    const onClickHandler = () => {
        props.volumeOffHandler()
    }

    const volumeValue = Math.round(props.volume * 100)

    return (
        <div className={"player-details"}>
            <p className={'volume'}>
                <button onClick={onClickHandler}>{
                    props.isVolumeOff ? <FontAwesomeIcon icon={faVolumeMute}/> : <FontAwesomeIcon icon={faVolumeUp}/>
                }
                </button>
                <input
                    type="range"
                    min="0"
                    max="100"
                    className={"input-range"}
                    onChange={onChangeHandler}
                    value={volumeValue}
                    style={{backgroundSize: `${volumeValue}% 100%`}}
                />
            </p>
            <p className={'artistName'}>
                <b>{props.song ? props.song.artist : "no artist"}</b> - <span>{props.song ? props.song.tittle : "no name"}</span>
            </p>
        </div>
    )
}

export default PlayerDetails
