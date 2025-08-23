import { Component } from 'react';

let albmxd = []
for (let i = 1; i <= 20; i++) {
  albmxd.push({
    name: `Album ${i}`,
    artist: `Artist ${i}`,
  })
}
export default class albumgrid extends Component {
  state = {
    albums: albmxd,
    opacity: 0
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 200);
  }

  render() {
    const { albums, opacity } = this.state;
    return (<main className="flex-1 p-4 overflow-y-auto min-h-0" style={{ opacity, transition: 'opacity 0.5s' }}>
      <h2 className="text-2xl font-bold mb-4">Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <>{
          albums.map((album, idx) =>
          (<div key={idx} className='bg-gray-800 hover:bg-gray-700 p-4 rounded cursor-pointer transition-transform duration-200 hover:scale-105'>
            <div className="bg-gray-600 h-32 rounded mb-2"></div>
            <h3 className="text-white font-bold">{album.name}</h3>
            <p className="text-gray-400"> {album.artist}</p>
          </div>))

        }</>
      </div>
    </main>);
  }
};