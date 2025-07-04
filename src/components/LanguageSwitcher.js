'use client';
import { useRouter } from 'next/navigation'; // ✅ NOT from next-intl
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/en", "/ur/about"

  const currentLocale = pathname.split('/')[1]; // 'en' or 'ur'
  const isUrdu = currentLocale === 'ur';

  const handleClick = () => {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = isUrdu ? 'en' : 'ur'; // Replace locale
    const newPath = '/' + segments.join('/');
    router.replace(newPath);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded border text-sm font-medium transition bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
    >
      {isUrdu ? 'English' : 'اردو'}
    </button>
  );
}
