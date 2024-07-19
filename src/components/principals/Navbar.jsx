import React, { useState } from 'react';
import MenuHamburguer from '../icons/MenuHamburguer';
import { Link } from 'react-router-dom';
import logo from '../../img/logos/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="py-4 px-6 flex items-center justify-between text-white mx-auto max-w-6xl">
        <Link to={'/'} className=''>
          <div className="text-2xl font-bold text-purple-800 flex items-center">
            Stylist<span className="text-black">Finde</span>
          </div>
        </Link>
        <article className='hidden sm:flex text-purple-800 list-none font-bold space-x-4 mr-12 mx-auto'>
          <li className='hover:scale-110 transform transition-transform duration-200'>Como funciona</li>
          <li className='hover:scale-110 transform transition-transform duration-200'>Aprendizaje</li>
          <li className='hover:scale-110 transform transition-transform duration-200'>Trabaja con nosotros</li>
          <li className='hover:scale-110 transform transition-transform duration-200'>Contactanos</li>
        </article>
        <nav className="flex items-center gap-4">
          <article className="hidden sm:flex gap-4">
            <Link to={'/register'}>
              <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Registrate
                </span>
              </button>
            </Link>
            <Link to={''}>
              <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Iniciar Sesión
                </span>
              </button>
            </Link>
          </article>
          <button className="block sm:hidden text-purple-800" onClick={toggleMenu}>
            <MenuHamburguer />
          </button>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="sm:hidden fixed top-0 right-0 w-3/4  bg-white shadow-lg z-50">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-purple-800">X</button>
          </div>
          <article className='text-purple-800 list-none font-bold space-y-2 p-4'>
            <li className='hover:scale-110 transform transition-transform duration-200'>Como funciona</li>
            <li className='hover:scale-110 transform transition-transform duration-200'>Aprendizaje</li>
            <li className='hover:scale-110 transform transition-transform duration-200'>Trabaja con nosotros</li>
            <li className='hover:scale-110 transform transition-transform duration-200'>Contactanos</li>
          </article>
          <article className="flex flex-col gap-4 p-4">
            <Link to={'/register'}>
              <button className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Registrate
                </span>
              </button>
            </Link>
            <Link to={''}>
              <button className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Iniciar Sesión
                </span>
              </button>
            </Link>
          </article>
        </div>
      )}
    </div>
  );
}

export default Navbar;
