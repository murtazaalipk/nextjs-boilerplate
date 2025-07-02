"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const mode = useSelector((state) => state.theme.mode);

//   const navLinks = (
//     <div >
//       <a href="#" className="hover:underline">Home</a>
//       <a href="#" className="hover:underline">About</a>
//       <a href="#" className="hover:underline">Contact</a>
//     </div>
//   );

  return (
    <>
      {/* Top Navbar */}
      <header className="flex items-center justify-between p-4 border-b dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white">
        <h1 className="text-xl font-bold">My Site</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">{navLinks}</nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
          >
            <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Panel — WITHOUT overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50
        bg-white dark:bg-gray-900 text-black dark:text-white
        transform ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out shadow-lg md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setDrawerOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">{navLinks}</nav>
      </div>
    </>
  );
}
