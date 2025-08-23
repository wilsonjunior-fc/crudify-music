import React, { Component } from 'react';
import { TbZoom } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";

class Sidebar extends Component {
  render() {
    return (
      <aside className="w-64 bg-gray-900 text-white p-4 border-r-3 border-gray-800 flex flex-col gap-2">
        <button className='hover:underline cursor-pointer bg-gray-800 p-2 my-2 hover:bg-gray-700 rounded-full px-18 flex items-center w-full gap-2 transition-transform duration-200 hover:scale-105'>
          <FaHome /> Home
        </button>
        <button className='hover:underline cursor-pointer bg-gray-800 p-2 my-2 hover:bg-gray-700 rounded-full px-18 flex items-center w-full gap-2 transition-transform duration-200 hover:scale-105'>
          <TbZoom /> Browse
        </button>
        <button className='hover:underline cursor-pointer bg-gray-800 p-2 my-2 hover:bg-gray-700 rounded-full px-18 flex items-center w-full gap-2 transition-transform duration-200 hover:scale-105'>
          <CgAlbum /> Library
        </button>
      </aside >
    );
  }
}

export default Sidebar;
