'use client';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '@/redux/slices/userSlice';

export default function ContactPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  const handleFetch = () => {
    dispatch(fetchUser("https://jsonplaceholder.typicode.com/users/1"));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Contact Page (User Info)</h1>

      <button
        onClick={handleFetch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch User'}
      </button>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {data && (
        <div className="mt-4 space-y-1">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
        </div>
      )}
    </div>
  );
}
