'use client';
import {Link} from '@/i18n/navigation'; // your i18n‑aware helper

export default function SettingsNav() {
  const links = [
    {href: '/settings', label: 'General'},
    {href: '/settings/profile', label: 'Profile'},
    {href: '/settings/security', label: 'Security'},
    {href: '/settings/security/password', label: 'Password'}
  ];

  return (
    <nav className="flex flex-wrap gap-2 mb-4">
      {links.map(l => (
        <Link key={l.href} href={l.href} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm">
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
