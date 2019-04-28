import React from 'react'
import {connect} from 'react-redux'

// import Song from './Song'

const Songlist = ({songList}) => (
  

  <div>
    <ul>
      {songList.map(song => {
        return <li key={song.id}><a href={`https://www.songsterr.com/a/wa/song?id=${song.id}`}>{song.title}, </a><a href={`http://www.songsterr.com/a/wa/artist?id=${song.artist.id}`}>{song.artist.name}</a></li>
      })}
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  return {
    songList: state.songList
  }
}

export default connect(mapStateToProps)(Songlist)