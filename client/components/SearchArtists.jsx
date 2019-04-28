import React from 'react'
import {connect} from 'react-redux'

import {fetchArtist} from '../actions'

class SearchArtists extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            searchValue: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange (e) {
        this.setState({
            searchValue: e.target.value 
        })
    }

    handleClick () {
        let {dispatch} = this.props
        let requestedArtist = this.state.searchValue

        dispatch(fetchArtist(requestedArtist))
    }

    render () {
        return (
            <div>
                <input placeholder="Artist" onChange={e => this.handleChange(e)}></input>
                <button onClick={() => this.handleClick()}>Search for tabs!</button>
            </div>
        )
    }
}

export default connect()(SearchArtists)