// "use client";
// import useThemeClass from "@/hooks/useThemeClass";
// import ThemeToggle from "./ThemeToggle";
// function ThemeWrapper({ children }) {
//   const themeClass = useThemeClass();

//   return (
//     <div className={`${themeClass} min-h-screen p-10`}>
//       <header className="p-4 border-b dark:border-gray-600">
//         <ThemeToggle />
//       </header>
//       <main className="p-6">{children}</main>
//     </div>
//   );
// }
// export default ThemeWrapper;

'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ThemeToggle from './ThemeToggle';

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
      <header className="p-4 border-b dark:border-gray-600">
        <ThemeToggle />
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
