import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import './PlayItem.css';
import Button from "../../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {chooseSong, deleteHandler} from "../../../redux/actions";

const PlayItem = (props) => {
    const dispatch = useDispatch()
    const { currentSongIndex } = useSelector(state => state.player)


    const chooseSongHandler = (e) => {
        if (!props.isDeleted) {
            dispatch(chooseSong(e, props.index))
        }
    }
    const ondDeleteHandler = () => {
        dispatch(deleteHandler(props.song, props.id, props.isDeleted,props.index))
    }

    return (
        <div className={`${"play-item"} ${currentSongIndex === props.index && !props.isDeleted ? 'active' : ""}`} onClick={chooseSongHandler}>
            <main>
                <img
                    src="https://www.freepnglogos.com/uploads/compact-disc-png-logo/compact-cd-dvd-disk-company-png-logo-35.png"
                    alt="Disk"
                />
                <p>
                    <span><b>{props.tittle}</b></span>
                    <span>{props.artist}</span>
                </p>
            </main>
            <Button isDeleted={props.isDeleted} onClick={ondDeleteHandler}>
                <FontAwesomeIcon icon={props.isDeleted ? faPlusSquare : faTrashAlt}/>
            </Button>
        </div>
    )
}

export default PlayItem;