// my-login-cookie-demo/app/login/page.js
'use client'; // This component needs to be a Client Component

import Link from 'next/link';
import {useRouter} from '@/i18n/navigation'; // ✅ from next-intl/navigation
import { useState, useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [cookieStatus, setCookieStatus] = useState('Checking...');

  const checkCookieStatus = () => {
    if (typeof document !== 'undefined') {
      const cookieExists = document.cookie.includes('user_logged_in=true');
      setCookieStatus(cookieExists ? 'Present (Logged In)' : 'Not Present (Logged Out)');
      return cookieExists;
    }
    return false;
  };

  useEffect(() => {
    checkCookieStatus();
  }, []); // Run once on mount to get initial status

  const handleLogin = () => {
    document.cookie = 'user_logged_in=true; path=/; max-age=3600'; // Set cookie for 1 hour
    setCookieStatus('Present (Logged In)');
    console.log("Cookie 'user_logged_in' saved. Redirecting to Dashboard...");
    router.push('/dashboard'); // Navigate after cookie is set
  };

  const handleLogout = () => {
    document.cookie = 'user_logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Remove cookie
    setCookieStatus('Not Present (Logged Out)');
    console.log("Cookie 'user_logged_in' removed.");
    // Optionally alert, but the UI update and redirection if they try dashboard is enough
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-sm mx-auto w-full text-center sm:p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Manage Your Login Status
      </h1>

      <p className="mb-4 dark:text-gray-300">
        Current Cookie Status: <span className="font-semibold">{cookieStatus}</span>
      </p>

      <div className="flex flex-col gap-4">
        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Login (Save Cookie)
        </button>
      </div>
    </div>
  );
}