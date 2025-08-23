import React, { Component } from 'react';
import { LuDiscAlbum } from "react-icons/lu";

class Header extends Component {
  render() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl"> <LuDiscAlbum className='inline size-8' /> Crudify Music</h1>
      </header>
    );
  }
}

export default Header;
