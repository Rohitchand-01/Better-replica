# Better.com Replica — React + Next.js

A multi-page web application replicating four Better.com pages with responsive UI and an interactive mortgage calculator.  
Built as part of the React Intern assignment.

---

## 🚀 Live Demo
- App: <https://better-replica-taupe.vercel.app>  
- Repo: <https://github.com/Rohitchand-01/Better-replica>

---

## 🛠 Tech Stack
- **Next.js** (App Router) + **React**  
- **TypeScript**  
- **Styling**: SCSS
- **Deployment**: Vercel  

---

## 📂 Routes
- `/` → Home (better.com)  
- `/about` → About Us (better.com/about)  
- `/calculator` → Mortgage Calculator (supports query params like `?taxes=265&zip=421005`)  
- `/start` → Start (better.com/start)  

---

## ✨ Features
- Pixel-close responsive layouts (mobile → desktop)  
- Mortgage calculator with:
  - Loan amount, interest rate (APR), loan term (years)  
  - Property tax, homeowners insurance  
  - Monthly P&I + escrow breakdown  
  - Query params prefill (`?taxes=265&zip=421005`)  
- Accessible components (labels, keyboard navigation)  
- SEO metadata & social share tags per page  

---

## ⚙️ Getting Started

Clone repo and install dependencies:

```bash
git clone <https://github.com/Rohitchand-01/Better-replica>
cd better-replica
npm install # or yarn / pnpm install
npm run dev
