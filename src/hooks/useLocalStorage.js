'use client';

import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('useLocalStorage get error:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('useLocalStorage set error:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
