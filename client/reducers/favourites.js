import {SET_FAVOURITES} from '../actions'

function favourites (state = [], action) {
    switch(action.type) {
        case SET_FAVOURITES:
            return action.favourites
        default:
            return state
    }
}

export default favourites