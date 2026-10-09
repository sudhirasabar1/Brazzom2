/*
 BRAZZOM SETTINGS
 1. Replace LOCKER_URL with your CPAGrip locker URL.
 2. VIDEO_URL: direct MP4 URL for content you own/are authorized to show. Leave blank for placeholder.
 3. POSTER_URL is optional. Never place secret API keys in client-side files.
*/
const LOCKER_URL = "PASTE_YOUR_CPAGRIP_LOCKER_URL_HERE";
const VIDEO_URL = "";
const POSTER_URL = "";

const button = document.getElementById("unlockButton");
const video = document.getElementById("previewVideo");
const emptyState = document.getElementById("emptyState");
document.getElementById("year").textContent = new Date().getFullYear();

if (POSTER_URL.trim()) video.poster = POSTER_URL.trim();
if (VIDEO_URL.trim()) {
  video.querySelector("source").src = VIDEO_URL.trim();
  video.load();
  emptyState.classList.add("hidden");
  video.addEventListener("error", () => emptyState.classList.remove("hidden"));
}
button.addEventListener("click", () => {
  const url = LOCKER_URL.trim();
  if (!url || url === "PASTE_YOUR_CPAGRIP_LOCKER_URL_HERE") {
    alert("Add your CPAGrip locker URL in script.js first.");
    return;
  }
  try {
    const parsed = new URL(url);
    if (!["https:", "http:"].includes(parsed.protocol)) throw new Error("Invalid protocol");
    window.open(parsed.href, "_blank", "noopener,noreferrer");
  } catch {
    alert("The CPAGrip locker URL looks invalid. Please check script.js.");
  }
});
