import React from 'react'
import {connect} from 'react-redux'

import {addToFavourites} from '../api'
import {fetchFavourites} from '../actions'

class Songlist extends React.Component{
  
  handleClick (e) {
    let songName = e.target.getAttribute('songname')
    let artist = e.target.getAttribute('artist')
    let id = e.target.getAttribute('id')
  
    addToFavourites(songName, artist, id)
    .then(this.props.goFetchFavourites())
  }

  render () {
    return (
      <div id="songlist">
        <ul>
          {this.props.songList.map(song => {
            let {title, artist, id} = song
            let url = `https://www.songsterr.com/a/wa/song?id=${id}`
            return (
              <li key={id}>
                <a target="_blank" href={url}>{title}, </a>
                <a target="_blank" href={`http://www.songsterr.com/a/wa/artist?id=${artist.id}`}>{artist.name}</a>
                <button method="post" songname={title} artist={artist.name} id={id} onClick={(e) => this.handleClick(e)}>Add to favourites</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songList: state.songList
  }
}

const mapDispatchToProps = dispatch => {
  return {
      goFetchFavourites: () => dispatch(fetchFavourites()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Songlist)