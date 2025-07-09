# 🎬 Movie Explorer

A responsive and accessible React + Vite web app that lets you search for movies, view posters and summaries, and explore details using the OMDb API.

> 🚀 **Live Demo:**  
> 👉 https://686e9ef52cfdca125777dc69--cosmic-salamander-6af4f2.netlify.app/

---



---

## 🔍 Features

- 🔎 Search movies by title (via OMDb API)
- 🖼️ View posters and movie info
- ℹ️ Click to view detailed movie panel
- 🌓 Light/Dark theme toggle (persists with localStorage)
- ⚡ Caching of previous search queries (no re-fetching)
- 🧪 Unit tests for SearchBar & MovieDetails
- ✅ Fully responsive & keyboard accessible
- 🌐 Deployed on Netlify

---

## 🛠 Setup & Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
2. Install Dependencies
bash
Copy
Edit
npm install
3. Add Your API Key
Create a .env file and add:

ini
Copy
Edit
VITE_OMDB_API_KEY=your_actual_key
Or directly in api.js:

js
Copy
Edit
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
4. Start Dev Server
bash
Copy
Edit
npm run dev
Visit http://localhost:5173

🧪 Run Tests
bash
Copy
Edit
npm test
Unit tests are written using Vitest and @testing-library/react.

📦 Build for Production
bash
Copy
Edit
npm run build
Output will be in the dist/ folder.

🌐 Deploy (Netlify)
bash
Copy
Edit
netlify deploy --prod
Make sure your publish directory is dist.

📄 Tech Stack
React 19

Vite

Styled Components

Axios

OMDb API

Netlify
