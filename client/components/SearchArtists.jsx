import React from 'react'
import {Component} from 'react'

class SearchArtists extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    handleChange (e) {
        this.setState({
            searchValue: e.target.value 
        })
    }

    handleClick () {
        console.log("handling click!")
    }

    render () {
        return (
            <div>
                <input placeholder="Artist" onChange={e => this.handleChange(e)}></input>
                <button onClick={this.handleClick}>Search for tabs!</button>
            </div>
        )
    }
}

export default SearchArtists