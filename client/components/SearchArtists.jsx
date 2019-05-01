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
        this.handleEnter = this.handleEnter.bind(this)
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

    handleEnter (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
            console.log("enter pressed!")
            // Enter pressed
            let {dispatch} = this.props
            let requestedArtist = this.state.searchValue
            dispatch(fetchArtist(requestedArtist))
        }
      }

    render () {
        return (
            <div>
                <input placeholder="Artist" onChange={e => this.handleChange(e)} onKeyPress={() => this.handleEnter()}></input>
                <button onClick={() => this.handleClick()}>Search for tabs!</button>
            </div>
        )
    }
}

export default connect()(SearchArtists)