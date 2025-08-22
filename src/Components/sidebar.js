import React from 'react';
import { TbZoom } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 border-r-3 border-gray-800">
      <button className='hover:underline py-2 cursor-pointer bg-gray-800 p-2 m-2 hover:bg-gray-700 rounded-full px-18 flex items-center gap-2'>
        <FaHome /> Home
      </button> <br />
      <button className='hover:underline py-2 cursor-pointer bg-gray-800 p-2 m-2 hover:bg-gray-700 rounded-full px-18 flex items-center gap-2'>
        <TbZoom /> Browse
      </button> <br />
      <button className='hover:underline py-2 cursor-pointer bg-gray-800 p-2 m-2 hover:bg-gray-700 rounded-full px-18 flex items-center gap-2'>
        <CgAlbum /> Library
      </button> <br />
    </aside >
  );
};

export default Sidebar;
