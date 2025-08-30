import React, { Component } from 'react';
import { LuDiscAlbum } from "react-icons/lu";
import { FiMenu } from 'react-icons/fi';

class Header extends Component {
  render() {
    return (
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between md:justify-start">
        <button onClick={this.props.onToggleSidebar} className="md:hidden mr-4">
          <FiMenu size={24} />
        </button>
        <h1 className="text-xl"> <LuDiscAlbum className='inline size-8' /> Crudify Music</h1>
      </header>
    );
  }
}

export default Header;
