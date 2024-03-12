import {CHOOSE_SONG, DELETE_SONG, IS_PLAYING, RESTORE_SONG, SKIP_SONG} from "./types";


export const chooseSong = (event, index) => dispatch => {
    dispatch({
        type: CHOOSE_SONG,
        index,
    })
}
export const isPlayingChange = () => dispatch => {
    dispatch({
        type: IS_PLAYING
    })
}
export const skipSong = (forwards = true) => (dispatch, getState) => {
    const {currentSongIndex, songs} = getState().player
    let temp = currentSongIndex
    if (forwards) {
        temp++
        if (temp > songs.length - 1) {
            temp = 0
        }
    } else {
        temp--
        if (temp < 0) {
            temp = songs.length - 1
        }
    }
    dispatch({
        type: SKIP_SONG,
        payload: temp,
    })
}
export const deleteHandler = (song, id, isDeleted, index) => (dispatch, getState) => {
    const {songs, deletedSongs, currentSongIndex} = getState().player
    if (isDeleted) {
        const restoredSongs = [song, ...songs].sort((s1, s2) => s1.id - s2.id)
        const filterDeletedSongs = deletedSongs.filter(song => song.id !== id)

        dispatch({
            type: RESTORE_SONG,
            payload: {
                restoredSongs: restoredSongs,
                filterDeletedSongs: filterDeletedSongs

            }
        })
        if (songs.length > 0 && id <= songs[currentSongIndex].id) {
            dispatch(skipSong(true))
            console.log(id, songs[currentSongIndex].id, true)
        }
    } else {
        const filteredSongs =
            songs.sort((s1, s2) => s1.id - s2.id)
                .filter(song => song.id !== id)
        const updateDeletedSongs = [song, ...deletedSongs]
        if (index < currentSongIndex) {
            dispatch(skipSong(false))
        } else if (currentSongIndex === songs.length - 1) {
            dispatch(skipSong(true))
        }

        dispatch({
            type: DELETE_SONG,
            payload: {
                filteredSongs: filteredSongs,
                updateDeletedSongs: updateDeletedSongs,
            }
        })
    }

}


