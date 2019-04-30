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
        )}
}

const mapStateToProps = (state) => {
  return {
    // favourites: favourites
  }
}

const mapDispatchToProps = dispatch => {
    return {
        goFetchFavourites: () => dispatch(fetchFavourites())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)