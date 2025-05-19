export function handleClearLocalStorage() {
  localStorage.setItem("loggedIn", "false");
  localStorage.setItem("email", "");
  localStorage.setItem("password", "");
  localStorage.setItem("timeElapsedInMins", "");
  localStorage.setItem("credentials", "");
  localStorage.setItem("oaToken", "");
  localStorage.setItem("hfToken", "");
  localStorage.setItem("name", "");
  localStorage.setItem("phone", "");
}
