import React from 'react'
import {connect} from 'react-redux'

import {fetchFavourites} from '../actions'

class Favourites extends React.Component{

    handleClick = (e) => {
        this.props.goFetchFavourites()
    }

    render () {

        return(
            <div>
                <h1>Favourites</h1>
                <button onClick={() => this.handleClick()}>Show favourites</button>
                <ul>
                {this.props.favourites.map(song => {

                    let songData = {
                        title: song.song_name,
                        artist: song.artist_name,
                        url: song.url
                    }

                    let {title, artist, url} = songData
                    
                    return (
                    <li>
                        <a target="_blank" href={url}>{title}, </a>
                        <a target="_blank">{artist}</a>
                        <button method="post" songname={title} artist={artist} onClick={(e) => handleClick(e)}>Remove from favourites</button>
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