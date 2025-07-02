"use client";
import useThemeClass from "@/hooks/useThemeClass";
import ThemeToggle from "./ThemeToggle";
function ThemeWrapper({ children }) {
  const themeClass = useThemeClass();

  return (
    <div className={`${themeClass} min-h-screen p-10`}>
      <header className="p-4 border-b dark:border-gray-600">
        <ThemeToggle />
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
export default ThemeWrapper;
