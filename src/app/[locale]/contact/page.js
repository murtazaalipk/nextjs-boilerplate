'use client';

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser } from '@/redux/slices/userSlice';

export default function ContactPage() {

  // const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.user);

  // const handleFetch = () => {
  //   dispatch(fetchUser("https://jsonplaceholder.typicode.com/users/1"));
  // };

  return (
    // <div className="p-6">
    //   <h1 className="text-xl font-bold mb-4">Contact Page (User Info)</h1>

    //   <button
    //     onClick={handleFetch}
    //     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    //     disabled={loading}
    //   >
    //     {loading ? 'Loading...' : 'Fetch User'}
    //   </button>

    //   {error && <p className="text-red-500 mt-4">Error: {error}</p>}

    //   {data && (
    //     <div className="mt-4 space-y-1">
    //       <p><strong>Name:</strong> {data.name}</p>
    //       <p><strong>Email:</strong> {data.email}</p>
    //       <p><strong>Phone:</strong> {data.phone}</p>
    //     </div>
    //   )}
    // </div>
    <div className="min-h-screen px-4 py-10 md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
