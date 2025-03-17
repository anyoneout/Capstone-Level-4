const rootPath = "/Capstone-Level-4";
const path = window.location.pathname;
window.localStorage.setItem("redirect", path);
window.location.replace(rootPath);
