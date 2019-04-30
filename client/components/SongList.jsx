import React from 'react'
import {connect} from 'react-redux'



// import Song from './Song'

const Songlist = ({songList}) => (
  
  <div>
    <ul>
      {songList.map(song => {
        let {title, artist, id} = song
        let url = `https://www.songsterr.com/a/wa/song?id=${id}`

        return (
          <li key={id}>
            <a target="_blank" href={url}>{title}, </a>
            <a target="_blank" href={`http://www.songsterr.com/a/wa/artist?id=${artist.id}`}>{artist.name}</a>
            <button songname={title} artist={artist.name} url={url} onClick={(e) => handleClick(e)}>Add to favourites</button>
          </li>
        )
      })}
    </ul>
  </div>
)

function handleClick (e) {
  let song = e.target.getAttribute('songname')
  let artist = e.target.getAttribute('artist')
  let url = e.target.getAttribute('url')

  addToFavourites(song, artist, url)
}

const mapStateToProps = (state) => {
  return {
    songList: state.songList
  }
}

export default connect(mapStateToProps)(Songlist)