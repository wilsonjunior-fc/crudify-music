import React from 'react';
import { Component } from 'react';

const albumsxd = [{
  name: "",
  artist: "",

}]

export default class albumgrid extends Component {
  state = {
    albuns: albumsxd
  }
  render() {
    return (<main className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Placeholder for albums */}
        <div className="bg-gray-700 p-4 rounded">
          <div className="bg-gray-600 h-32 rounded mb-2"></div>
          <h3 className="text-white font-bold">Album 1</h3>
          <p className="text-gray-400">Artist 1</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <div className="bg-gray-600 h-32 rounded mb-2"></div>
          <h3 className="text-white font-bold">Album 2</h3>
          <p className="text-gray-400">Artist 2</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <div className="bg-gray-600 h-32 rounded mb-2"></div>
          <h3 className="text-white font-bold">Album 3</h3>
          <p className="text-gray-400">Artist 3</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <div className="bg-gray-600 h-32 rounded mb-2"></div>
          <h3 className="text-white font-bold">Album 4</h3>
          <p className="text-gray-400">Artist 4</p>
          {/* -------------------- */}
        </div>
      </div>
    </main>);
  }
};

