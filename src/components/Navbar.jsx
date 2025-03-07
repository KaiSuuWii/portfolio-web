import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nav]);

  return (
    <div className="bg-black text-gray-400 h-[100px] w-full flex justify-between items-center px-4">
      <h1 className="text-3xl font-bold primary-color">K.T. Dagcuta</h1>
      <ul className="hidden md:flex list-none text-xl font-bold">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {nav && (
        <div
          className="fixed inset-0 bg-black/50 z-5"
          onClick={() => setNav(false)}
        ></div>
      )}


      <div
        ref={menuRef}
        className={`z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 ${
          nav ? 'left-0' : 'left-[-100%]'
        }`}
      >
        <h1 className="text-3xl font-bold primary-color m-4">K.T. Dagcuta</h1>
        <ul className="p-8 text-2xl list-none">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
