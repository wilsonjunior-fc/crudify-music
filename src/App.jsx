import { Component } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';
import MusicGrid from './Components/MusicGrid';
import Player from './Components/Player';
import MusicView from './Components/MusicView';
import MusicForm from './Components/MusicForm';
import { getMusics } from './lib/main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: getMusics(),
      currentMusic: null,
      editingMusic: null,
      isFormVisible: false,
      song: {
        url: null,
        title: 'No song selected',
        artist: '---',
      },
      isPlaying: false,
    };
    this.playSong = this.playSong.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.handleMusicClick = this.handleMusicClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSaveMusic = this.handleSaveMusic.bind(this);
    this.handleDeleteMusic = this.handleDeleteMusic.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
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
  }album

  handleMusicClick(music) {
    this.setState({ currentMusic: music });
  }

  handleBack() {
    this.setState({ currentMusic: null });
  }

  showForm(music = null) {
    this.setState({ isFormVisible: true, editingMusic: music });
  }

  hideForm() {
    this.setState({ isFormVisible: false, editingMusic: null });
  }

  handleSaveMusic(musicToSave) {
    if (musicToSave.id) { // Update
      this.setState(prevState => ({
        music: prevState.music.map(music => 
          music.id === musicToSave.id ? musicToSave : music
        ),
      }));
    } else { // Create
      this.setState(prevState => ({
        albums: [...prevState.albums, { ...musicToSave, id: Date.now() }],
      }));
    }
    this.hideForm();
  }

  handleDeleteMusic(musicId) {
    if (window.confirm('Are you sure?')) {
      this.setState(prevState => ({
        musics: prevState.musics.filter(music => music.id !== musicId),
      }));
    }
  }

  render() {
    const { song, isPlaying, currentMusic: currentAlbum, musics, isFormVisible, editingMusic } = this.state;
    return (
      <div className="fixed inset-0 bg-gray-900 text-white flex flex-col">
        <Header />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col min-h-0 p-6">
            {isFormVisible && (
              <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
                <MusicForm
                  album={editingMusic}
                  onSave={this.handleSaveAlbum} 
                  onCancel={this.hideForm} 
                />
              </div>
            )}
            {currentAlbum ? (
              <MusicView music={currentAlbum} onBack={this.handleBack} />
            ) : (
              <MusicGrid 
                musics={musics}
                onMusicClick={this.handleMusicClick} 
                onPlaySong={this.playSong} 
                onEdit={this.showForm}
                onDelete={this.handleDeleteAlbum}
                onAddMusic={() => this.showForm()}
              />
            )}
          </div>
        </div>
        <Player song={song} isPlaying={isPlaying} onTogglePlay={this.togglePlay} />
      </div>
    );
  }
}
