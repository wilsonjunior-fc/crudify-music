import React from 'react';
import { LuDiscAlbum } from "react-icons/lu";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-xl"> <LuDiscAlbum className='inline size-8' /> Crudify Music</h1>
    </header>
  );
};

export default Header;
