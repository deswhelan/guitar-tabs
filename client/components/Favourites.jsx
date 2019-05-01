import React from 'react'
import {connect} from 'react-redux'

import {fetchFavourites} from '../actions'
import {deleteFavourite} from '../api'

class Favourites extends React.Component{

    showFavouritesClick = (e) => {
        this.props.goFetchFavourites()
    }

    deleteFavouriteClick = (e) => {
        deleteFavourite(e.target.title)
        .then(this.props.goFetchFavourites())
    }

    render () {

        return(
            <div id="favourites">
                <h1>Favourites</h1>
                <button onClick={() => this.showFavouritesClick()}>Show favourites</button>
                <ul>
                {this.props.favourites.map(song => {

                    let songData = {
                        title: song.song_name,
                        artist: song.artist_name,
                        url: song.url
                    }

                    let {title, artist, url} = songData
                    
                    return (
                    <li key={url}>
                        <a target="_blank" href={url}>{title}, </a>
                        <a target="_blank">{artist}</a>
                        <button method="post" songname={title} title={title} onClick={(e) => this.deleteFavouriteClick(e)}>Remove from favourites</button>
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
        goFetchFavourites: () => dispatch(fetchFavourites()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)