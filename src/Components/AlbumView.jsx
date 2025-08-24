import { ChevronLeft } from 'lucide-react';
import StarRating from './StarRating';
import CommentSection from './CommentSection';
import { Component } from 'react';

export default class AlbumView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: this.props.album,
      onBack: this.props.onBack
    }
  }
  render() {
    const { album, onBack } = this.state
    return (
      <div>
        <button onClick={onBack} className="mb-4 flex items-center gap-2 text-zinc-400 hover:text-zinc-100">
          <ChevronLeft />
          Voltar
        </button>
        <h1 className="text-4xl font-bold">{album.title}</h1>
        <h2 className="text-xl text-zinc-400 mb-4">{album.artist}</h2>

        <StarRating initialRating={album.starRating} />
        <CommentSection initialComments={album.comments} />

      </div>
    );
  }
}