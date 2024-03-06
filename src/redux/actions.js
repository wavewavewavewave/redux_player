import {CHOOSE_SONG, IS_PLAYING, SKIP_SONG} from "./types";


export const chooseSong = (event, index) => dispatch => {
        dispatch({
            type: CHOOSE_SONG,
            payload: index,
        })
}
export const isPlayingChange = () => dispatch => {
    dispatch({
        type: IS_PLAYING
    })
}
export const skipSong = (forwards = true) => (dispatch, getState) => {
    const { currentSongIndex, songs } = getState().player
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
