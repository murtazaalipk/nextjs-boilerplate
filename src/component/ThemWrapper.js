'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ThemeToggle from './ThemeToggle';
import Header from './Header'; // Assuming you have a Header component 
export default function ThemeWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);

 useEffect(() => {
  console.log('🔁 Theme Effect Fired');
  console.log('Redux theme mode:', mode);

  const html = document.documentElement;
  console.log('Before toggle:', html.className);

  if (mode === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  console.log('After toggle:', html.className);
}, [mode]);


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <header className="p-4 ">
            <Header />
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
