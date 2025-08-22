import React from 'react';
import { TbZoom } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <ul>
        <li className="py-2 cursor-pointer bg-gray-800 p-2 m-2 hover:bg-gray-700 rounded-full text-center">
          <button> <FaHome className='inline' /> Home </button>
        </li>
        <li className="py-2 cursor-pointer bg-gray-800 p-2 m-2 hover:bg-gray-700 rounded-full text-center">
          <button> <TbZoom className='inline' /> Browse </button>
        </li>
        <li className="py-2 cursor-pointer bg-gray-800 p-2 m-2 hover:bg-gray-700 rounded-full text-center">
          <button> <CgAlbum className='inline' /> Library </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
