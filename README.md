# Next.js App Router Boilerplate

A **feature‑rich Next.js boilerplate** that ships with:

* **App Router** (Next.js 14+) with locale segment `[locale]`
* **Dynamic routing** & **deep linking** (`[...slug]`) for settings
* **Middleware auth guard** that blocks `/dashboard` unless a login cookie is set
* **Redux Toolkit** with `redux‑persist` **and** async‑thunk API helpers
* **`next‑intl` / i18next** (English `en` & Urdu `ur` ready)
* **Responsive Drawer UI** + **Light / Dark theme switch** using Tailwind + Redux
* **Custom React hooks** for geolocation & local‑storage state
* Ready‑to‑extend settings section with nested routes


## 📂 Folder Structure

```
src/
├─ app/
│  └─ [locale]/               # en, ur, …
│     ├─ layout.js            # shared layout (+ theme provider)
│     ├─ page.js              # locale home (/en)
│     ├─ login/page.js        # public login page
│     ├─ about/page.js        # /en/about
│     ├─ contact/page.js      # /en/contact
│     ├─ dashboard/page.js    # protected /en/dashboard
│     └─ [...slug]/page.js    # deep routes (/en/settings/security/password)
│
├─ middleware.js              # auth + locale detection
│
├─ components/
│  ├─ Drawer.js               # mobile‑friendly sidebar
│  ├─ SettingsNav.js          # navigation bar for settings pages
│  ├─ Header.js               # navigation for pages
│  ├─ Drawer.js               # mobile‑friendly sidebar
│  └─ LaguagugeSwitcher.js    # switch laguage by i18n
├─ hooks/
│  ├─ useGeoLocation.js       # current‑position hook
│  └─ useLocalStorage.js      # persistent state hook
│
├─ redux/
│  ├─ store.js                # root store + persist
│  └─ slices/
│     ├─ userSlice.js         # asyncThunks example
│     └─ themeSlice.js        # dark / light mode
│
├─ utils/
│  └─ api.js                  # tiny fetch wrapper (apiRequest)
│
└─ i18n/                      # next‑intl locale files
```


## 🔐 Auth & Middleware

### 1. Login Flow


`/login` is a public page that sets a cookie when the user clicks **Log In**:

/login/page.js: Contains the login logic where a cookie is set when the user clicks the Log In button, and then redirects to /dashboard.


### 2. Protected Dashboard

`/dashboard` is a folder with its own page file and is protected via middleware:

`/dashboard/page.js:` A protected page that only renders if the auth cookie is set. Otherwise, the middleware redirects to login.



### 3. Middleware Guard

`middleware.js:` Handles locale redirection (/ → /en or /ur) and protects routes like /dashboard by checking for a session cookie.



## 🧩 Custom React Hooks

This boilerplate provides reusable custom hooks:

`useGeoLocation(callback):`  Retrieves the user's latitude and longitude once on page load. Returns { location, loading, error }. Useful for features like city-based personalization or weather widgets.

`useLocalStorage(key, initialValue):` Manages persistent state using localStorage. It synchronizes the value automatically and returns a [value, setValue] tuple. Ideal for saving preferences like theme mode, language, or tokens.


## 🎨 Theme & Drawer

Dark/light state lives in themeSlice (Redux).

Theme class is attached to <html> in layout.js.

Drawer slides in on mobile and stays fixed on desktop.


## 🔄 Async API helper (user slice)

```js
export const fetchUser = createAsyncThunk('user/fetch', async (_, { rejectWithValue }) => {
  try {
    return await apiRequest({ url: 'https://jsonplaceholder.typicode.com/users/1' });
  } catch (e) {
    return rejectWithValue(e.message);
  }
});
```
The boilerplate includes an async thunk (fetchUser) example using Redux Toolkit and a custom apiRequest helper.

Although the fetch logic is commented out in /contact/page.js, you can view the implementation and easily enable it by dispatching fetchUser() when needed.

*(See full code in `redux/slices/userSlice.js`)*


## 🚀 Getting Started

```bash
npm install              # or npm / yarn / bun
npm rub dev              # → http://localhost:3000
```

Login flow test:

1. Navigate to `/en/dashboard` → should redirect to `/en/login`.
2. Click **Log In** → cookie set, redirected to dashboard.



## 📦 Deployment

Deploy instantly to Vercel → **works out of the box**.


## 🙌 Contributing

PRs & issues welcome – run `npm lint` before committing.


## 📄 License

MIT © 2025 [Syed Murtaza Ali](https://github.com/murtazaalipk)