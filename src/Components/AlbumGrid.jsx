import { Edit, Trash2, PlusCircle } from 'lucide-react';

export default function AlbumGrid({ albums, onAlbumClick, onPlaySong, onEdit, onDelete, onAddAlbum }) {
  return (
    <main className="flex-1 p-4 overflow-y-auto min-h-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Albums</h2>
        <button onClick={onAddAlbum} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
          <PlusCircle size={20} />
          Add album
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className='bg-gray-800 hover:bg-gray-700 p-4 rounded transition-transform duration-200 hover:scale-105 group'
          >
            <div className="relative">
              <img 
                src={album.cover || 'https://via.placeholder.com/150'}
                alt={""}
                className="w-full h-32 object-cover rounded mb-2 cursor-pointer" 
                onClick={() => onAlbumClick(album)}
              />
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => onEdit(album)} className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full">
                  <Edit size={16} />
                </button>
                <button onClick={() => onDelete(album.id)} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <h3 className="text-white font-bold truncate cursor-pointer" onClick={() => onAlbumClick(album)}>{album.title}</h3>
            <p className="text-gray-400 truncate">{album.artist}</p>
            <button onClick={() => onPlaySong(album)} className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded text-sm">
              Play
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
