import {SET_ARTIST} from '../actions'

function artistName (state = '', action) {
    switch(action.type) {
        case SET_ARTIST:
            return action.artistName
        default:
            return state
    }
}

export default artistName