import React from 'react'
import {connect} from 'react-redux'

import {addToFavourites} from '../api'


const Songlist = ({songList}) => (
  
  <div id="songlist">
    <ul>
      {songList.map(song => {
        let {title, artist, id} = song
        let url = `https://www.songsterr.com/a/wa/song?id=${id}`

        return (
          <li key={id}>
            <a target="_blank" href={url}>{title}, </a>
            <a target="_blank" href={`http://www.songsterr.com/a/wa/artist?id=${artist.id}`}>{artist.name}</a>
            <button method="post" songname={title} artist={artist.name} id={id} onClick={(e) => handleClick(e)}>Add to favourites</button>
          </li>
        )
      })}
    </ul>
  </div>
)

function handleClick (e) {
  let songName = e.target.getAttribute('songname')
  let artist = e.target.getAttribute('artist')
  let id = e.target.getAttribute('id')

  addToFavourites(songName, artist, id)
}

const mapStateToProps = (state) => {
  return {
    songList: state.songList
  }
}

export default connect(mapStateToProps)(Songlist)