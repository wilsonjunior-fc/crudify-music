import React from 'react';
import { Component } from 'react';


export default class albumgrid extends Component {
  state = {
    albums: [{
      name: "Album 1",
      artist: "Artist 1",
    },
    {
      name: "Album 2",
      artist: "Artist 2",
    },
    {
      name: "Album 3",
      artist: "Artist 3",
    },
    {
      name: "Album 4",
      artist: "Artist 4",
    },
    {
      name: "Album 5",
      artist: "Artist 5",
    },
    {
      name: "Album 6",
      artist: "Artist 6",
    },
    {
      name: "Album 7",
      artist: "Artist 7",
    },
    {
      name: "Album 8",
      artist: "Artist 8",
    }]
  }
  render() {

    const { albums } = this.state;
    return (<main className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <>{
          albums.map((album) =>
          (<div className='bg-gray-700 p-4 rounded'>
            <div className="bg-gray-600 h-32 rounded mb-2"></div>
            <h3 className="text-white font-bold">{album.name}</h3>
            <p className="text-gray-400"> {album.artist}</p>
          </div>))

        }</>
      </div>
    </main>);
  }
};

