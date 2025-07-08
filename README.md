# 🎬 Movie Explorer

A fast and responsive movie search app built with **React + Vite**, powered by the **OMDb API**.  
Includes theme switching, client-side caching, keyboard accessibility, and unit tests.


---

## 🚀 Features

- 🔎 Search movies by title
- 🖼️ View posters and movie titles
- ℹ️ Click to view detailed info (rating, plot, link)
- 🌓 Light/Dark theme toggle (persists using localStorage)
- ⚡ Client-side search result caching
- ✅ Responsive layout (mobile to desktop)
- ♿ Keyboard accessible (Escape to close, Tab to cycle)
- 🧪 Unit tested with Vitest + Testing Library

---

## 🛠️ Setup & Run

### 1. Clone the repository

```bash
cd movie-explorer
2. Install dependencies
bash
Copy
Edit
npm install
3. Add your OMDb API key
Edit src/api.js and replace this line:

js
Copy
Edit
const API_KEY = 'YOUR_OMDB_API_KEY';
You can get a free key at http://www.omdbapi.com/apikey.aspx

4. Start the development server
bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser.

🧪 Run Unit Tests
bash
Copy
Edit
npm test
Tests are written using Vitest and @testing-library/react
✔️ SearchBar — submits search queries
✔️ MovieDetails — opens/closes modal on overlay click or Escape

🌐 Deploy to GitHub Pages
bash
Copy
Edit
npm run deploy
Live Demo: https://your-username.github.io/movie-explorer

🧠 Design Notes
Caching Strategy
Uses a simple in-memory JS object in src/cache.js

If the same query is searched again, it skips the API call

Accessibility
Press Escape to close movie modal

All buttons and inputs have focus styling

Modal uses role="dialog" and supports keyboard navigation

Styling
All styles are written using styled-components

Light/Dark mode toggles the theme using localStorage

⚠️ Known Limitations
OMDb API may return N/A for missing data

No search debounce or loading spinner yet

Caching is lost on page reload (not persisted in localStorage)

📁 Tech Stack
Vite

React 19

Styled-Components

Axios

Vitest + React Testing Library


### ✅ Next Steps:

1. Replace:
   - `https://github.com/your-username/...` with your actual GitHub URL
   - Screenshot link if you have one

2. Add this file to your repo:
```bash
touch README.md
Paste the content and save.

Commit and push:

bash
Copy
Edit
git add README.md
git commit -m "📄 Add README with setup and features"
git push

