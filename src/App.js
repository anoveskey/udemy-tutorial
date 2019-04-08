import React, { useState } from 'react';
import './App.css';
import Album from './Album/Album';


const App = (props) => {
            const style = {
                backgroundColor: 'darkBlue',
                color: 'white',
                padding: '5px',
            }
            const [albumsState, setAlbumsState] = useState( {
                albums: [
                    {id: 'asdf', artist: "The Beach Boys", title: "Pet Sounds"},
                    {id: 'ghjk', artist: "Syd Barrett", title: "The Madcap Laughs"},
                    {id: 'rtyu', artist: "Chemlab",title: "Eastside Militia"}
                ],
                showAlbums: false
            })
            const nameChangedHandler = (event, id) => {
                const albumIndex = albumsState.albums.findIndex(a => {
                    return a.id === id;
                });
                const album = Object.assign({}, albumsState.albums[albumIndex]);
                album.title = event.target.value;
                const albums = [...albumsState.albums];
                albums[albumIndex] = album;
                setAlbumsState({
                    albums: albums,
                    showAlbums: albumsState.showAlbums
                })
            }
            const deleteAlbumHandler = (albumIndex) => {
                const albums = [...albumsState.albums];
                albums.splice(albumIndex, 1);
                setAlbumsState({albums: albums, showAlbums: albumsState.showAlbums});
            }
            const toggleAlbumsHandler = () => {
                const doesShow = albumsState.showAlbums
                setAlbumsState({
                    albums: [
                        {id: 'asdf', artist: "The Beach Boys", title: "Pet Sounds"},
                        {id: 'ghjk', artist: "Syd Barrett", title: "The Madcap Laughs"},
                        {id: 'qwer', artist: "Chemlab",title: "10 Ton Pressure"},
                        {id: 'zxcv', artist: "The Cure", title:"The Head On The Door"}
                    ],
                    showAlbums: !doesShow })
            }
            let albums = null;

            if (albumsState.showAlbums) {
                albums = (
                    <div>
                    {albumsState.albums.map((album, index) => {
                        return (<Album
                            key={album.id}
                            click={() => deleteAlbumHandler(index)}
                            title={album.title}
                            artist={album.artist}
                            changed={(event) => nameChangedHandler(event, album.id)}/>)
                    })}
                    </div>
                );
                style.backgroundColor = 'blue';
            }
            return (
                <div className="App">
                    <button style={style} onClick={toggleAlbumsHandler}>Show albums!</button>
                    {albums}
                </div>
            );
        }

export default App;
