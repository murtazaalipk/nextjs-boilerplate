"use client";
import { useState } from "react";
import useGeoLocation from "@/hooks/useGeoLocation";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Home() {
  // Custom hook to save and retrieve data from localStorage
  const [name, setName] = useLocalStorage("user-name", "");
  const [inputValue, setInputValue] = useState("");
  const handleSave = () => {
    if (!inputValue.trim()) return;
    setName(inputValue);
    setInputValue("");
  };
// Custom hook to get user's geolocation
  const { location, error, loading } = useGeoLocation((coords) => {
    console.log("Got location in callback:", coords);
  });

  return (
    <>
      <h1>app/page</h1>
      {/*input for check useLocalStorage Hook*/}
      {/* <div className="p-6 max-w-md mx-auto">
        <h1 className="text-xl font-semibold mb-4">Save to Local Storage</h1>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>

        {name && (
          <p className="mt-4 text-gray-700">
            ✅ Stored in localStorage: <strong>{name}</strong>
          </p>
        )}
      </div> */}
    </>
  );
}
