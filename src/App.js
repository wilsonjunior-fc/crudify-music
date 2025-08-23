import { Component } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';
import AlbumGrid from './Components/AlbumGrid';
import Player from './Components/Player';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {
        url: null,
        title: 'No song selected',
        artist: '---',
      },
      isPlaying: false,
    };
    this.playSong = this.playSong.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
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

  render() {
    const { song, isPlaying } = this.state;
    return (
      <div className="fixed inset-0 bg-gray-900 text-white flex flex-col">
        <Header />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col min-h-0">
            <AlbumGrid onPlaySong={this.playSong} />
          </div>
        </div>
        <Player song={song} isPlaying={isPlaying} onTogglePlay={this.togglePlay} />
      </div>
    );
  }
}
