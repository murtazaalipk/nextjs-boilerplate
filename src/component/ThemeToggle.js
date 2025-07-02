"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded text-black dark:text-white"
      >
        {theme === "light" ? "🌙 Dark" : "🌞 Light"}
      </button>
    </>
  );
}
