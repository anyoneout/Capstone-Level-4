export function handleClearLocalStorage() {
  localStorage.setItem("loggedIn", "false");
  localStorage.setItem("loggedInEmail", "");
  localStorage.setItem("loggedInPassword", "");
  localStorage.setItem("timeElapsedInMins", "");
  localStorage.setItem("credentials", "");
  localStorage.setItem("oaToken", "");
  localStorage.setItem("hfToken", "");
}
