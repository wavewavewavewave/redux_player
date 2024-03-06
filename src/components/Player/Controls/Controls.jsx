import "./Controls.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBackward, faForward, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {isPlayingChange, skipSong} from "../../../redux/actions";

const Controls = (props) => {

    const dispatch = useDispatch()

    const { isPlaying } = useSelector(state => state.player)
    const isPlayingHandler = () => {
        dispatch(isPlayingChange())
    }
    const prevSongHandler = () => {
        dispatch(skipSong(false))
    }
    const nextSongHandler = () => {
        dispatch(skipSong(true))
    }

    return (
        <div className={'controls'}>
            <div className={'buttons'}>
                <button onClick={prevSongHandler}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button
                    onClick={isPlayingHandler}

                >
                    {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </button>
                <button onClick={nextSongHandler}>
                    <FontAwesomeIcon icon={faForward} />
                </button>
            </div>
            <div className={"progress-bar"}>
                <input
                    type="range"
                    min="0"
                    max="100"
                />
            </div>
        </div>
    )
}

export default Controls
