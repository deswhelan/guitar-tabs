import React from 'react'
import {connect} from 'react-redux'

//we'll need to pass favourites into props!
const Favourites = () => (
  
    <div>
        <h1>Favourites</h1>
        <ul>
        {/* {favourites.map(song => {
            
            return (
            <li key={id}>
                <a target="_blank" href={url}>{title}, </a>
                <a target="_blank" href={`http://www.songsterr.com/a/wa/artist?id=${artist.id}`}>{artist.name}</a>
                <button method="post" id={id} onClick={(e) => handleClick(e)}>Delete from favourites</button>
            </li>
            )
        })} */}
        </ul>
  </div>
)

function handleClick (e) {
    console.log("deleting from favourites!")

    // add deleteFromFavourites function!
    //   let songName = e.target.getAttribute('songname')
    //   let artist = e.target.getAttribute('artist')
    //   let id = e.target.getAttribute('id')
    //   addToFavourites(songName, artist, id)
}

const mapStateToProps = (state) => {
  return {
    // favourites: favourites
  }
}

export default connect(mapStateToProps)(Favourites)