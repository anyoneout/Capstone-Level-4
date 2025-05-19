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
export function selectHandleRefreshDidMount(state: StateVariables) {
  {
    return state.handleRefreshState.didMount;
  }
}
export function selectAiPageDidMount(state: StateVariables) {
  return state.aiPageStateVar.didMount;
}
export function selectTestBackendDidMount(state: StateVariables) {
  return state.testBackendStateVar.didMount;
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
export function selectCreateUserName(state: StateVariables) {
  return state.createAccountState.userName;
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
export function selectCreateHfToken(state: StateVariables) {
  return state.createAccountState.hfToken;
}
export function selectCreateOaToken(state: StateVariables) {
  return state.createAccountState.oaToken;
}
export function selectCreateResponseMessage(state: StateVariables) {
  return state.createAccountState.responseMessage;
}
export function selectCreateReadMessage(state: StateVariables) {
  return state.createAccountState.readResponse;
}
export function selectCreateShowModal(state: StateVariables) {
  return state.createAccountState.showModal;
}
export function selectCreateIsSignedIn(state: StateVariables) {
  return state.createAccountState.isSignedIn;
}
export function selectCreateDidMount(state: StateVariables) {
  return state.createAccountState.didMount;
}

//read account

export function selectReadEmail(state: StateVariables) {
  return state.readAccountState.email;
}
export function selectReadPassword(state: StateVariables) {
  return state.readAccountState.password;
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
export function selectUpdateName(state: StateVariables) {
  return state.updateAccountState.name;
}
export function selectUpdatePhone(state: StateVariables) {
  return state.updateAccountState.phone;
}
export function selectUpdateHfToken(state: StateVariables) {
  return state.updateAccountState.hfToken;
}
export function selectUpdateOaToken(state: StateVariables) {
  return state.updateAccountState.oaToken;
}
export function selectUpdateResponseMessage(state: StateVariables) {
  return state.updateAccountState.responseMessage;
}
export function selectUpdateShowModal(state: StateVariables) {
  return state.updateAccountState.showModal;
}
export function selectUpdateDidMount(state: StateVariables) {
  return state.updateAccountState.didMount;
}

//account profile
export function selectProfileEmail(state: StateVariables) {
  return state.accountProfileState.email;
}
export function selectProfilePassword(state: StateVariables) {
  return state.accountProfileState.password;
}
export function selectProfileName(state: StateVariables) {
  return state.accountProfileState.name;
}
export function selectProfilePhone(state: StateVariables) {
  return state.accountProfileState.phone;
}
export function selectProfileHfToken(state: StateVariables) {
  return state.accountProfileState.hfToken;
}
export function selectProfileOaToken(state: StateVariables) {
  return state.accountProfileState.oaToken;
}
export function selectProfileResponseMessage(state: StateVariables) {
  return state.accountProfileState.responseMessage;
}
export function selectProfileShowModal(state: StateVariables) {
  return state.accountProfileState.showModal;
}
export function selectProfileDidMount(state: StateVariables) {
  return state.accountProfileState.didMount;
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
export function selectSignInEmail(state: StateVariables) {
  return state.isSignedInState.email;
}
export function selectSignInPassword(state: StateVariables) {
  return state.isSignedInState.password;
}
export function selectSignInError(state: StateVariables) {
  return state.isSignedInState.error;
}

//global account
export function selectGlobalAccount(state: StateVariables) {
  return state.globalAccountState.account;
}

//authUser
export function selectAuthUserEmail(state: StateVariables) {
  return state.authUserState.email;
}
export function selectAuthUserUserName(state: StateVariables) {
  return state.authUserState.userName;
}
export function selectAuthUserPassword(state: StateVariables) {
  return state.authUserState.password;
}
export function selectAuthUserName(state: StateVariables) {
  return state.authUserState.name;
}
export function selectAuthUserPhone(state: StateVariables) {
  return state.authUserState.phone;
}
export function selectAuthUserHfToken(state: StateVariables) {
  return state.authUserState.hfToken;
}
export function selectAuthUserOaToken(state: StateVariables) {
  return state.authUserState.oaToken;
}
export function selectAuthUserResponseMessage(state: StateVariables) {
  return state.authUserState.responseMessage;
}
export function selectAuthUserReadMessage(state: StateVariables) {
  return state.authUserState.readResponse;
}
export function selectAuthUserIsSignedIn(state: StateVariables) {
  return state.authUserState.isSignedIn;
}
