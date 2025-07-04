import {notFound} from 'next/navigation';
import SettingsNav from '../../../components/SettingNav';

// Map of *valid* deep routes to their JSX content.
const SETTINGS_ROUTES = {
  // ⬇️ depth‑1
  'settings': <h2 className="text-2xl font-bold">⚙️ General Settings</h2>,

  // ⬇️ depth‑2
  'settings/profile': <h2 className="text-2xl font-bold">👤 Edit Profile</h2>,
  'settings/security': <h2 className="text-2xl font-bold">🔐 Security Overview</h2>,

  // ⬇️ depth‑3
  'settings/security/password': <h2 className="text-2xl font-bold">🔑 Change Password</h2>
};

export default async function DeepRoutePage({params}) {
  const awaitParams = await params; // must await params!
  const slugArr = awaitParams?.slug || []; // must not await params!
  const path = slugArr.join('/');

  const content = SETTINGS_ROUTES[path];
  if (!content) return notFound();

  return (
    <section className="space-y-4">
      <SettingsNav />
      {content}
      <p className="text-sm text-gray-500">Path: <code>{path}</code></p>
    </section>
  );
}
