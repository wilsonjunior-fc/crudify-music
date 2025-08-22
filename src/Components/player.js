import React from 'react';
import { FaPlay } from "react-icons/fa";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const Player = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div>
        <p className="font-bold">Song Title</p>
        <p className="text-sm">Artist Name</p>
      </div>
      <div className="flex items-center">
        <button className="mx-3"><TbPlayerTrackPrevFilled className='size-6 hover:text-gray-400 cursor-pointer' /></button>
        <button className="mx-3"><FaPlay className='size-5 hover:text-gray-400 cursor-pointer' /></button>
        <button className="mx-3"><TbPlayerTrackNextFilled className='size-6 hover:text-gray-400 cursor-pointer' /></button>
      </div>
      <div>
        <p>Volume</p>
      </div>
    </footer>
  );
};

export default Player;
