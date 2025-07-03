"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  console.log("🧠 Redux Theme Mode:", mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded text-black dark:text-white"
    >
      {mode === "light" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}
