import { useState, useEffect } from 'react';

export default function AlbumForm({ album, onSave, onCancel }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [cover, setCover] = useState('');

  useEffect(() => {
    if (album) {
      setTitle(album.title || '');
      setArtist(album.artist || '');
      setCover(album.cover || '');
    }
  }, [album]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...album, title, artist, cover });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 p-6 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold">{album ? 'Editar Álbum' : 'Adicionar Álbum'}</h2>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-zinc-300">Título</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-zinc-700 p-2 rounded mt-1"
          required
        />
      </div>
      <div>
        <label htmlFor="artist" className="block text-sm font-medium text-zinc-300">Artista</label>
        <input
          id="artist"
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="w-full bg-zinc-700 p-2 rounded mt-1"
          required
        />
      </div>
      <div>
        <label htmlFor="cover" className="block text-sm font-medium text-zinc-300">URL da Capa</label>
        <input
          id="cover"
          type="text"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          className="w-full bg-zinc-700 p-2 rounded mt-1"
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" onClick={onCancel} className="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded">
          Cancelar
        </button>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Salvar
        </button>
      </div>
    </form>
  );
}
