import React from 'react'
import {connect} from 'react-redux'

import Song from './Song'

const Songlist = ({Songlist}) => (
  <div>
    {Songlist.map((song, i) =>
      <Song
        key={i}
        title={song.title}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    Songlist: state.songlist
  }
}

export default connect(mapStateToProps)(Songlist)