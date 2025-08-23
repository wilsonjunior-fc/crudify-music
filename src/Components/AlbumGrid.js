import { Component } from 'react';

const sampleUrls = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Rick Astley - Never Gonna Give You Up
  'https://www.youtube.com/watch?v=3tmd-ClpJxA', // a-ha - Take On Me
  'https://www.youtube.com/watch?v=y6120QOlsfU', // Toto - Africa
  'https://www.youtube.com/watch?v=Vbg7YoXiKn0', // Queen - Bohemian Rhapsody
  'https://www.youtube.com/watch?v=9bZkp7q19f0', // Michael Jackson - Billie Jean
];

const albmxd = [];
for (let i = 1; i <= 20; i++) {
  albmxd.push({
    name: `Album ${i}`,
    artist: `Artist ${i}`,
    url: sampleUrls[i % sampleUrls.length],
  });
}

export default class AlbumGrid extends Component {
  state = {
    albums: albmxd,
    opacity: 0
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 200);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { albums, opacity } = this.state;
    const { onPlaySong } = this.props;

    return (
      <main className="flex-1 p-4 overflow-y-auto min-h-0" style={{ opacity, transition: 'opacity 0.5s' }}>
        <h2 className="text-2xl font-bold mb-4">Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {albums.map((album, idx) => (
            <div
              key={idx}
              className='bg-gray-800 hover:bg-gray-700 p-4 rounded cursor-pointer transition-transform duration-200 hover:scale-105'
              onClick={() => onPlaySong(album)}
            >
              <div className="bg-gray-600 h-32 rounded mb-2"></div>
              <h3 className="text-white font-bold">{album.name}</h3>
              <p className="text-gray-400">{album.artist}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}