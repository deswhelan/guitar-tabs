import React from 'react'
import {connect} from 'react-redux'

// import Song from './Song'

const Songlist = ({songList, artistName}) => (
  

  <div>
    <h1>{artistName}</h1>
    <ul>
      {songList.map(song => {
        return <li><a href={`https://www.songsterr.com/a/wa/song?id=${song.id}`}>{song.title}</a></li>
      })}
    </ul>
    {/* {Songlist.map((song, i) =>
      <Song
        key={i}
        title={song.title}
      />
    )} */}
  </div>
)

const mapStateToProps = (state) => {
  return {
    songList: state.songList,
    artistName: state.artistName
  }
}

export default connect(mapStateToProps)(Songlist)