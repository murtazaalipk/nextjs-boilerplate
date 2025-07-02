// /hooks/useThemeClass.js
import { useSelector } from "react-redux";


export default function useThemeClass() {
    const mode = useSelector((state) => state.theme.mode);

  return  mode === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';
}
