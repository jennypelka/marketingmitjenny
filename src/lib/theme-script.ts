// Runs inline in <head> before first paint so the stored theme never flashes. Hashed for the CSP meta tag.
export const themeScript =
  "try{var t=localStorage.getItem('mmj-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}document.documentElement.classList.add('js');";
