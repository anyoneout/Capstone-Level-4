const rootPath = "/React-Capstone-with-branches";
const path = window.location.pathname;
window.localStorage.setItem("redirect", path);
window.location.replace(rootPath); 
