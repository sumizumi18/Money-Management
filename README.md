# Money Tracker — PWA

A fully installable personal finance app for Android (and iOS).
Data is stored on-device in localStorage — nothing leaves your phone.

---

## Option A: Deploy to GitHub Pages (recommended — permanent URL)

1. Create a free account at https://github.com
2. Create a new repository called `money-tracker` (set it to Public)
3. Upload these three files: `index.html`, `manifest.json`, `sw.js`
4. Go to Settings → Pages → set Source to "main" branch → Save
5. Your app will be live at: `https://YOUR-USERNAME.github.io/money-tracker`
6. Open that URL on your Nothing Phone 2 in Chrome
7. Tap the three-dot menu → "Add to Home screen"
8. Done — it's installed like a native app ✓

---

## Option B: Use Netlify Drop (even easier, 30 seconds)

1. Go to https://app.netlify.com/drop in your browser
2. Drag the entire folder onto the page
3. Netlify gives you a live URL instantly
4. Open that URL on your phone → Add to Home screen

---

## Option C: Run locally (for testing on laptop)

```bash
# Python 3
python3 -m http.server 8080

# Then open http://localhost:8080 in Chrome
```

---

## Installing on your Nothing Phone 2

1. Open the app URL in **Chrome** (not the Nothing browser)
2. Tap the **⋮ menu** (three dots, top right)
3. Tap **"Add to Home screen"**
4. Tap **"Add"** on the confirmation
5. The app icon appears on your home screen

It will open full-screen, with no browser chrome — just like a native app.
All data is saved to your phone and works fully offline after the first load.

---

## Notes

- Data is stored in your phone's browser storage (localStorage)
- Clearing Chrome's site data will erase the app's data
- For a backup, you can export your data from Chrome DevTools (if needed)
- The app icon requires `icon-192.png` and `icon-512.png` — 
  without them Android will auto-generate a fallback icon from the app name.
  You can generate icons at https://maskable.app/editor
