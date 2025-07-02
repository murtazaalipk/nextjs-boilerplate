"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import ToggleThemeButton from "./ThemeToggle"; // Import the theme toggle button

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const mode = useSelector((state) => state.theme.mode);

  const desktopLinks = (
    <div className="flex justify-center items-baseline gap-5">
      <a href="#" className="hover:underline">
        Home
      </a>
      <a href="#" className="hover:underline">
        About
      </a>
      <a href="#" className="hover:underline">
        Contact
      </a>
      <ToggleThemeButton />
    </div>
  );

  const mobileLinks = (
    <div className="flex flex-col space-y-4">
      <a href="#" className="hover:underline">
        Home
      </a>
      <a href="#" className="hover:underline">
        About
      </a>
      <a href="#" className="hover:underline">
        Contact
      </a>
      <ToggleThemeButton />
    </div>
  );
 

  return (
    <>
      {/* Header bar */}
      <header className="flex items-center justify-between p-4 border-b dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white">
        <h1 className="text-xl font-bold">My Site</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex">{desktopLinks}</nav>

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

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-blackbg-opacity-10 z-40"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out
        bg-white dark:bg-gray-900 text-black dark:text-white
        z-50 p-4`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setDrawerOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        <nav>{mobileLinks}</nav>
      </div>
    </>
  );
}
