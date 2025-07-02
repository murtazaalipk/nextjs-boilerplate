'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/redux/slices/themeSlice';

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
