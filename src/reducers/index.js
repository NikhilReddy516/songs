import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {id:1, title: 'No Scrubs', duration: '4:05'},
        {id: 2, title: 'Macarena', duration: '2:50'},
        {id: 3, title: 'All star', duration: '3:35'},
        {id: 4, title: 'I want it that way', duration: '3:05'},
        {id: 5, title: 'Rockzzz', duration: '4:10'},
        
    ];
};


const selectedSongReducer = ( selectedSong=null, action ) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});