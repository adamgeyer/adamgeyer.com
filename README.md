# adamgeyer.com — Study Site

Personal study site with interactive flashcards, quizzes, and exam drills.

## Project structure

```
adamgeyer-study/
├── index.html          ← Homepage / course directory
├── mgt011a.html        ← MGT 011A Elementary Accounting
├── css/
│   └── global.css      ← Shared styles, design tokens
├── js/
│   └── data.js         ← All flashcard, quiz, and journal entry data
└── README.md
```

To add a new course: duplicate `mgt011a.html`, update `js/data.js` with new content, and add a card to `index.html`.

---

## Deploy to Vercel (recommended — free, fast)

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
```

Create a new repo at github.com/new, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/study-site.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import your `study-site` repo
4. Click **Deploy** — no build settings needed (it's pure HTML)

Vercel will give you a URL like `study-site-abc123.vercel.app` in ~30 seconds.

### Step 3 — Connect your domain

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `adamgeyer.com` (and optionally `www.adamgeyer.com`)
3. Vercel will show you DNS records to add — usually an **A record** or **CNAME**

**Where to add DNS records** depends on your domain registrar:
- **Squarespace Domains / Google Domains**: Domains → DNS → Add record
- **Namecheap**: Dashboard → Manage → Advanced DNS
- **GoDaddy**: My Products → DNS → Add

**Expected propagation time**: 15 minutes to 2 hours for most registrars.

---

## Deploy to Netlify (alternative)

1. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
2. Connect GitHub, select your repo, click **Deploy**
3. Under **Domain settings**, add `adamgeyer.com`
4. Follow the DNS instructions Netlify provides

---

## Deploy to GitHub Pages (simplest, no account needed)

1. Push to GitHub (Step 1 above)
2. Go to repo → **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Your site will be at `YOUR_USERNAME.github.io/study-site`
5. To use a custom domain: add a `CNAME` file containing `adamgeyer.com` to the repo root, then point your domain's DNS to GitHub's IPs

GitHub Pages custom domain IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## Adding more courses

1. Copy `mgt011a.html` → e.g. `ecs150.html`
2. Edit the page title, breadcrumb, chapter pills
3. Add new arrays to `js/data.js`:
   - `CARDS_ECS150 = [...]`
   - `QUIZ_ECS150 = [...]`
   - `JE_ECS150 = [...]`
4. Update the script references in your new HTML file
5. Add a course card in `index.html`
