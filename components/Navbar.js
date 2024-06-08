import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-teal-500 to-teal-700 py-4 px-8 flex items-center flex-row">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">To Do App</h1>
        </Link>
        <ul className="hidden md:flex space-x-4 ml-auto">
          <li>
            <Link href="/" className="text-gray-200 hover:text-white px-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-200 hover:text-white px-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-200 hover:text-white px-2">
              Contact
            </Link>
          </li>
        </ul>
        <button className="md:hidden focus:outline-none text-gray-300 hover:text-white p-2 ml-auto">
          {/* ... hamburger menu button content ... */}
        </button>
      </nav>
    </div>
  );
}
