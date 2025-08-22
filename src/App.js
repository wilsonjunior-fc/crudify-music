import React from 'react';
import Header from './Components/header';
import Sidebar from './Components/sidebar';
import AlbumGrid from './Components/albumgrid';
import Player from './Components/player';

function App() {
  return (
    <div className="fixed inset-0 bg-gray-900 text-white flex flex-col">
      <Header />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <div className="flex-1 min-w-0 flex flex-col min-h-0">
          <AlbumGrid />
        </div>
      </div>
      <Player />
    </div>
  );
}

export default App;
