import React from 'react';
import Header from './Components/header';
import Sidebar from './Components/sidebar';
import AlbumGrid from './Components/albumgrid';
import Player from './Components/player';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <AlbumGrid />
      </div>
      <Player />
    </div>
  );
}

export default App;
