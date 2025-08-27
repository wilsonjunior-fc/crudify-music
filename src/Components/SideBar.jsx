import { FaHome } from "react-icons/fa";
import { TbZoom } from "react-icons/tb";
import { CgAlbum } from "react-icons/cg";
import { PlusCircle } from 'lucide-react';

export default function Sidebar({ musics, onMusicClick, onAddMusic, onHomeClick }) {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 border-r-3 border-gray-800 flex flex-col gap-2">
      <nav className="space-y-2">
        <button onClick={onHomeClick} className='hover:underline cursor-pointer bg-gray-800 p-2 my-2 hover:bg-gray-700 rounded-full px-18 flex items-center w-full gap-2 transition-transform duration-200 hover:scale-105'>
          <FaHome /> Home
        </button>
        <button onClick={onHomeClick} className='hover:underline cursor-pointer bg-gray-800 p-2 my-2 hover:bg-gray-700 rounded-full px-18 flex items-center w-full gap-2 transition-transform duration-200 hover:scale-105'>
          <TbZoom /> Browse
        </button>
      </nav>

      <div className="mt-4 pt-4 border-t border-gray-800 flex-grow flex flex-col min-h-0">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold flex items-center gap-2"><CgAlbum /> Sua Biblioteca</h2>
          <button onClick={onAddMusic} className="text-zinc-400 hover:text-white cursor-pointer">
            <PlusCircle size={20} />
          </button>
        </div>

        <div className="space-y-1 overflow-y-auto flex-grow">
          {musics.map(music => (
            <div 
              onClick={(e) => { e.preventDefault(); onMusicClick(music); }}
              className="block p-2 rounded bg-gray-800 z-30 hover:bg-gray-900 truncate cursor-pointer"
            >
              {music.title}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
