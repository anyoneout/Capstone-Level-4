import { StateVariables } from "./stateVariables";

//didMount
export function selectAboutDidMount(state: StateVariables) {
  return state.aboutStateVar.didMount;
}
export function selectBfPageDidMount(state: StateVariables) {
  return state.bfPageStateVar.didMount;
}
export function selectExampleDidMount(state: StateVariables) {
  return state.examplesStateVar.didMount;
}
export function selectHomeDidMount(state: StateVariables) {
  return state.homeStateVar.didMount;
}
export function selectOaPageDidMount(state: StateVariables) {
  return state.oaPageStateVar.didMount;
}
export function selectAwsFormsDidMount(state: StateVariables) {
  return state.awsFormsStateVar.didMount;
}

//trivia api
export function selectTriviaApiDidMount(state: StateVariables) {
  return state.triviaApiStateVar.didMount;
}
export function selectTriviaApiTrivia(state: StateVariables) {
  return state.triviaApiStateVar.apiTrivia;
}
export function selectTriviaApiStatus(state: StateVariables) {
  return state.triviaApiStateVar.apiStatus;
}

//dynamo auth
export function selectDynamoAuthDidMount(state: StateVariables) {
  return state.dynamoAuthStateVar.didMount;
}
export function selectDynamoAuthResponse(state: StateVariables) {
  return state.dynamoAuthStateVar.authResponse;
}

//create account
export function selectCreateEmail(state: StateVariables) {
  return state.createAccountState.email;
}
export function selectCreatePassword(state: StateVariables) {
  return state.createAccountState.password;
}
export function selectCreateName(state: StateVariables) {
  return state.createAccountState.name;
}
export function selectCreatePhone(state: StateVariables) {
  return state.createAccountState.phone;
}
export function selectCreateResponseMessage(state: StateVariables) {
  return state.createAccountState.responseMessage;
}
export function selectCreateReadMessage(state: StateVariables) {
  return state.createAccountState.readResponse;
}

//read account

export function selectReadEmail(state: StateVariables) {
  return state.readAccountState.email;
}
export function selectReadResponseMessage(state: StateVariables) {
  return state.readAccountState.responseMessage;
}

//update account
export function selectUpdateEmail(state: StateVariables) {
  return state.updateAccountState.email;
}
export function selectUpdatePassword(state: StateVariables) {
  return state.updateAccountState.password;
}
export function selectUpdateResponseMessage(state: StateVariables) {
  return state.updateAccountState.responseMessage;
}

//delete account

export function selectDeleteEmail(state: StateVariables) {
  return state.deleteAccountState.email;
}
export function selectDeletePassword(state: StateVariables) {
  return state.deleteAccountState.password;
}
export function selectDeleteResponseMessage(state: StateVariables) {
  return state.deleteAccountState.responseMessage;
}

//sign in area

export function selectSignInIsSignedIn(state: StateVariables) {
  return state.isSignedInState.isSignedIn;
}
export function selectSignInDidMount(state: StateVariables) {
  return state.isSignedInState.didMount;
}
export function selectSignInButtonText(state: StateVariables) {
  return state.isSignedInState.buttonText;
}
export function selectSignInButtonClass(state: StateVariables) {
  return state.isSignedInState.buttonClass;
}
export function selectSignInShowModal(state: StateVariables) {
  return state.isSignedInState.showModal;
}
