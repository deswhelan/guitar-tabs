import React from 'react'
import {connect} from 'react-redux'

import {fetchFavourites} from '../actions'

class Favourites extends React.Component{

    handleClick = (e) => {
        this.props.goFetchFavourites()
    }

    render () {
        console.log(this.props)
        return(
            <div>
                <h1>Favourites</h1>
                <button onClick={() => this.handleClick()}>Show favourites</button>
                <ul>
                {this.props.favourites.map(song => {
                    
                    return (
                    <li>
                        {song.song_name}
                    </li>
                    )
                })}
                </ul>
            </div>
        )}
}

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites
  }
}

const mapDispatchToProps = dispatch => {
    return {
        goFetchFavourites: () => dispatch(fetchFavourites())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)