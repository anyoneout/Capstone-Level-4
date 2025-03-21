export function oaSaveUser() {
  const { name, email, oaiToken } = getInputValues();
  saveToLocalStorage(name, email, oaiToken);
  updateUI();
}

function getInputValues(): { name: string; email: string; oaiToken: string } {
  const inputName = document.getElementById("nameInput") as HTMLInputElement;
  const inputEmail = document.getElementById("emailInput") as HTMLInputElement;
  const oaiUserToken = document.getElementById(
    "openAiTokenInput"
  ) as HTMLInputElement;

  return {
    name: inputName.value,
    email: inputEmail.value,
    oaiToken: oaiUserToken.value,
  };
}

function saveToLocalStorage(name, email, oaiToken) {
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("oaiToken", oaiToken);
}

function updateUI() {
  const userNameHandle = document.getElementById("userNameHTML");
  const userEmailHandle = document.getElementById("userEmailHTML");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  userNameHandle.innerHTML = userName;
  userEmailHandle.innerHTML = userEmail;
}
