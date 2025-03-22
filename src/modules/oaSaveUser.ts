export function oaSaveUser() {
  const { name, email, oaiToken } = getInputValues();
  saveToLocalStorage(name, email, oaiToken);
  updateUI();
}

function getInputValues(): { name: string; email: string; oaiToken: string } {
  const inputName = document.getElementById("nameInput") as any;
  const inputEmail = document.getElementById("emailInput") as any;
  const oaiUserToken = document.getElementById("openAiTokenInput") as any;

  return {
    name: inputName.value,
    email: inputEmail.value,
    oaiToken: oaiUserToken.value,
  };
}

function saveToLocalStorage(
  name: string,
  email: string,
  oaiToken: string
): void {
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("oaiToken", oaiToken);
}

function updateUI(): void {
  const userNameHandle = document.getElementById("userNameHTML");
  const userEmailHandle = document.getElementById("userEmailHTML");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  userNameHandle.innerHTML = userName;
  userEmailHandle.innerHTML = userEmail;
}
