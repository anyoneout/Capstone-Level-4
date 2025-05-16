export function oaSaveUser() {
  const { name, email, oaToken } = getInputValues();
  saveToLocalStorage(name, email, oaToken);
  updateUI();
}

function getInputValues(): { name: string; email: string; oaToken: string } {
  const inputName = document.getElementById("nameInput") as any;
  const inputEmail = document.getElementById("emailInput") as any;
  const oaUserToken = document.getElementById("openAiTokenInput") as any;

  return {
    name: inputName.value,
    email: inputEmail.value,
    oaToken: oaUserToken.value,
  };
}

function saveToLocalStorage(name: string, email: string, oaToken: string): void {
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("oaToken", oaToken);
}

function updateUI(): void {
  const userNameHandle = document.getElementById("userNameHTML");
  const userEmailHandle = document.getElementById("userEmailHTML");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  userNameHandle.innerHTML = userName;
  userEmailHandle.innerHTML = userEmail;
}
