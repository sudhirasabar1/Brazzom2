# Brazzom — CPAGrip Landing Page

Static, mobile-responsive black-and-blue neon landing page for GitHub Pages.

## Files
- `index.html` — page layout and offer disclosure
- `style.css` — responsive styling
- `script.js` — CPAGrip locker URL and optional video preview settings
- `assets/video-poster.svg` — included placeholder poster

## Setup
1. Download and unzip this project.
2. Open `script.js` in a text editor.
3. Replace `PASTE_YOUR_CPAGRIP_LOCKER_URL_HERE` with your own CPAGrip locker URL.
4. Optionally add a direct MP4 URL to `VIDEO_URL` for a video you own or are authorized to distribute. Leave it blank to keep the placeholder.
5. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder to the root of your GitHub repository.
6. In GitHub, open **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
7. After deployment, open `https://YOUR-USERNAME.github.io/REPOSITORY/`.

## Important
- The button opens the locker in a new tab. This static page does not verify offer completion; configure post-offer access using CPAGrip's supported locker flow.
- GitHub Pages is static hosting. Do not add secret API keys or credentials to browser-side code.
- Offer availability and requirements vary. Keep the disclosure clear and follow CPAGrip terms and applicable law.
- Use only video content you own or are authorized to distribute. Some video hosts block direct playback/hotlinking.
