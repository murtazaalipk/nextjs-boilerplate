// my-login-cookie-demo/app/dashboard/page.js
'use client'; // Mark as a Client Component

import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function DashboardPage() {
  const router = useRouter(); // Initialize router

  const handleLogout = () => {
    // Remove the authentication cookie
    document.cookie = 'user_logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    console.log("Cookie 'user_logged_in' removed from Dashboard.");
    router.push('/login'); // Redirect to login page after logout
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto w-full text-center sm:p-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to your Dashboard!</h1>
      <p className="mb-6 text-gray-600">
        You've successfully accessed this protected area.
        You can go back home or log out.
      </p>

      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go to Home
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Logout
        </button>
      </div>
    </div>
  );
}