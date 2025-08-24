import { Component } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';
import AlbumGrid from './Components/AlbumGrid';
import Player from './Components/Player';
import AlbumView from './Components/AlbumView';
import AlbumForm from './Components/AlbumForm';
import { albums } from './lib/main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albums,
      currentAlbum: null,
      editingAlbum: null,
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
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSaveAlbum = this.handleSaveAlbum.bind(this);
    this.handleDeleteAlbum = this.handleDeleteAlbum.bind(this);
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
  }

  handleAlbumClick(album) {
    this.setState({ currentAlbum: album });
  }

  handleBack() {
    this.setState({ currentAlbum: null });
  }

  showForm(album = null) {
    this.setState({ isFormVisible: true, editingAlbum: album });
  }

  hideForm() {
    this.setState({ isFormVisible: false, editingAlbum: null });
  }

  handleSaveAlbum(albumToSave) {
    if (albumToSave.id) { // Update
      this.setState(prevState => ({
        albums: prevState.albums.map(album => 
          album.id === albumToSave.id ? albumToSave : album
        ),
      }));
    } else { // Create
      this.setState(prevState => ({
        albums: [...prevState.albums, { ...albumToSave, id: Date.now() }],
      }));
    }
    this.hideForm();
  }

  handleDeleteAlbum(albumId) {
    if (window.confirm('Tem certeza que deseja remover este álbum?')) {
      this.setState(prevState => ({
        albums: prevState.albums.filter(album => album.id !== albumId),
      }));
    }
  }

  render() {
    const { song, isPlaying, currentAlbum, albums, isFormVisible, editingAlbum } = this.state;
    return (
      <div className="fixed inset-0 bg-gray-900 text-white flex flex-col">
        <Header />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col min-h-0 p-6">
            {isFormVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <AlbumForm 
                  album={editingAlbum}
                  onSave={this.handleSaveAlbum} 
                  onCancel={this.hideForm} 
                />
              </div>
            )}
            {currentAlbum ? (
              <AlbumView album={currentAlbum} onBack={this.handleBack} />
            ) : (
              <AlbumGrid 
                albums={albums}
                onAlbumClick={this.handleAlbumClick} 
                onPlaySong={this.playSong} 
                onEdit={this.showForm}
                onDelete={this.handleDeleteAlbum}
                onAddAlbum={() => this.showForm()}
              />
            )}
          </div>
        </div>
        <Player song={song} isPlaying={isPlaying} onTogglePlay={this.togglePlay} />
      </div>
    );
  }
}
