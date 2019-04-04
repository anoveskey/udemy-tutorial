import React, { Component } from 'react';
import './App.css';
import Album from './Album/Album';

class App extends Component {
    state = {
        albums: [
            {artist: "The Beach Boys", title: "Pet Sounds"},
            {artist: "Syd Barrett", title: "The Madcap Laughs"},
            {artist: "Chemlab",title: "Eastside Militia"}
            ],
        showAlbums: false
    };
    
    switchCurrentListeningHandler = (differentTitle) => {
        this.setState({
        albums: [
            {artist: "The Beach Boys", title: "Pet Sounds"},
            {artist: "Syd Barrett", title: "The Madcap Laughs"},
            {artist: "Chemlab",title: differentTitle}
        ]
    })
    }

    nameChangedHandler = (event) => {
        this.setState({
            albums: [
                {artist: "The Beach Boys", title: "Pet Sounds"},
                {artist: "Syd Barrett", title: "The Madcap Laughs"},
                {artist: "Chemlab",title: event.target.value},
                {artist: "The Cure", title:"Faith"}
            ]
        })
    }
    toggleAlbumsHandler = () => {
        const doesShow = this.state.showAlbums
        this.setState({ showAlbums: !doesShow })
    }
  render() {
        return (
          <div className="App">
              <button onClick={this.toggleAlbumsHandler}>Show albums!</button>
              { this.state.showAlbums ? <div>
                  <Album
                      title={this.state.albums[0].title}
                      artist={this.state.albums[0].artist}
                      click={this.switchCurrentListeningHandler.bind(this, 'Oxidizer')}/>
                  <Album
                      title={this.state.albums[1].title}
                      artist={this.state.albums[1].artist} />
                  <Album
                      title={this.state.albums[2].title}
                      artist={this.state.albums[2].artist}
                      changed={this.nameChangedHandler}/>
                  { this.state.albums.length > 3 ? <Album
                      title={this.state.albums[3].title}
                      artist={this.state.albums[3].artist}/> : null
                  }
              </div> : null }
          </div>
      );
  }
  }

export default App;
