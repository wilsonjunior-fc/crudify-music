import { ChevronLeft } from 'lucide-react';
import StarRating from './StarRating';
import CommentSection from './CommentSection';

export default function AlbumView({ album, onBack }) {
  return (
    <div>
      <button onClick={onBack} className="mb-4 flex items-center gap-2 text-zinc-400 hover:text-zinc-100">
        <ChevronLeft />
        Voltar
      </button>
      <h1 className="text-4xl font-bold">{album.title}</h1>
      <h2 className="text-xl text-zinc-400 mb-4">{album.artist}</h2>
      
      <StarRating />
      <CommentSection />

      {/* Aqui você pode adicionar a lista de músicas do álbum */}
    </div>
  );
}
