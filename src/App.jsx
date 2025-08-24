import { Component } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';
import AlbumGrid from './Components/AlbumGrid';
import Player from './Components/Player';
import AlbumView from './Components/AlbumView';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAlbum: null,
      song: {
        url: null,
        title: 'No song selected',
        artist: '---',
      },
      isPlaying: false,
    };
    this.playSong = this.playSong.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  playSong(newSong) {
    this.setState({
      song: newSong,
      isPlaying: true,
    });
  }

  togglePlay() {
    if (this.state.song.url) {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
      }));
    }
  }

  handleAlbumClick(album) {
    this.setState({ currentAlbum: album });
  }

  handleBack() {
    this.setState({ currentAlbum: null });
  }

  render() {
    const { song, isPlaying, currentAlbum } = this.state;
    return (
      <div className="fixed inset-0 bg-gray-900 text-white flex flex-col">
        <Header />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col min-h-0 p-6">
            {currentAlbum ? (
              <AlbumView album={currentAlbum} onBack={this.handleBack} />
            ) : (
              <AlbumGrid onAlbumClick={this.handleAlbumClick} onPlaySong={this.playSong} />
            )}
          </div>
        </div>
        <Player song={song} isPlaying={isPlaying} onTogglePlay={this.togglePlay} />
      </div>
    );
  }
}
