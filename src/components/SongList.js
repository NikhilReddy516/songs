import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component {

    SongView( song ){
        return (
            <div  className="song-view" key={song.id}> 
                <span>{song.title}  
                    <button className="select" onClick={() => this.props.selectSong(song)}>Select</button>
                </span> 
                <hr/>
            </div>
        );
    }
    
    
    render() { 
        return (
            <div>
                {this.props.songs.map(song => {return(this.SongView(song))})}
            </div>
        )
    }
}


const mapStateToProps = ( state ) => {
    console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);