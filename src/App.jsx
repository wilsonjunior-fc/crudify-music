import { Component } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';
import MusicGrid from './Components/MusicGrid';
import Player from './Components/Player';
import MusicView from './Components/MusicView';
import MusicForm from './Components/MusicForm';
import {
  getMusics, updateMusic, deleteMusic,
  createMusic, addCommentMusic, rateMusic,
  deleteComment, getComments
} from './lib/main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: getMusics(),
      currentMusic: null,
      editingMusic: null,
      isFormVisible: false,
      isSidebarVisible: false,
      song: {
        url: null,
        title: 'No song selected',
        artist: '---',
      },
      isPlaying: false,
    };
    this.playSong = this.playSong.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleMusicClick = this.handleMusicClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSaveMusic = this.handleSaveMusic.bind(this);
    this.handleDeleteMusic = this.handleDeleteMusic.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleRateMusic = this.handleRateMusic.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => ({
      isSidebarVisible: !prevState.isSidebarVisible,
    }));
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

  handleMusicClick(music) {
    this.setState({ currentMusic: music });
    if (window.innerWidth < 768) {
      this.setState({ isSidebarVisible: false });
    }
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
      updateMusic(musicToSave.id, musicToSave.title, musicToSave.artist, musicToSave.url, musicToSave.cover)
      this.setState({ musics: getMusics() })
    } else { // Create
      createMusic(musicToSave.title, musicToSave.artist, musicToSave.url, musicToSave.cover);
      this.setState({ musics: getMusics() })
    }
    this.hideForm();
  }

  handleDeleteMusic(musicId) {
    if (window.confirm('Are you sure?')) {
      deleteMusic(musicId)
      this.setState({ musics: getMusics() })
    }
  }

  handleAddComment(musicId, comment) {
    addCommentMusic(musicId, comment);
    this.setState({ musics: getMusics() });
  }

  handleDeleteComment(musicId, commentID) {
    deleteComment(musicId, commentID);
    this.setState({ musics: getMusics() });
  }

  handleRateMusic(musicId, rating) {
    rateMusic(musicId, rating);
    this.setState({ musics: getMusics() });
  }

  render() {
    const { song, isPlaying, currentMusic, musics, isFormVisible, editingMusic, isSidebarVisible } = this.state;
    return (
      <div className="fixed inset-0 bg-primary-800 text-white flex flex-col">
        <Header onToggleSidebar={this.toggleSidebar} />
        <div className="flex flex-1 min-h-0">
          <Sidebar
            musics={musics}
            onMusicClick={this.handleMusicClick}
            onAddMusic={() => this.showForm()}
            onHomeClick={this.handleBack}
            isSidebarVisible={isSidebarVisible}
          />
          <div className="flex-1 min-w-0 flex flex-col min-h-0 p-6">
            {isFormVisible && (
              <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
                <MusicForm
                  music={editingMusic}
                  onSave={this.handleSaveMusic}
                  onCancel={this.hideForm}
                />
              </div>
            )}
            {currentMusic ? (
              <MusicView
                music={currentMusic}
                onBack={this.handleBack}
                onAddComment={this.handleAddComment}
                onDeleteComment={this.handleDeleteComment}
                onRateMusic={this.handleRateMusic}
                onGetComments={getComments}
              />
            ) : (
              <MusicGrid
                musics={musics}
                onMusicClick={this.handleMusicClick}
                onPlaySong={this.playSong}
                onEdit={this.showForm}
                onDelete={this.handleDeleteMusic}
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
