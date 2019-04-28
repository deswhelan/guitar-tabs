import {RECEIVE_SONGS} from '../actions'

function songList (state = [], action) {
    switch(action.type) {
        case RECEIVE_SONGS:
            return action.songList
        default:
            return state
    }
}

export default songList