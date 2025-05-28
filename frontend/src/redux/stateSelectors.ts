import { Account } from "../types/Account";
import { StateVariables } from "./stateVariables";

//didMount
export function selectAboutDidMount(state: StateVariables): boolean {
  return state.aboutStateVar.didMount;
}
export function selectBfPageDidMount(state: StateVariables): boolean {
  return state.bfPageStateVar.didMount;
}
export function selectExampleDidMount(state: StateVariables): boolean {
  return state.examplesStateVar.didMount;
}
export function selectHomeDidMount(state: StateVariables): boolean {
  return state.homeStateVar.didMount;
}
export function selectOaPageDidMount(state: StateVariables): boolean {
  return state.oaPageStateVar.didMount;
}
export function selectAwsFormsDidMount(state: StateVariables): boolean {
  return state.awsFormsStateVar.didMount;
}
export function selectHandleRefreshDidMount(state: StateVariables): boolean {
  {
    return state.handleRefreshState.didMount;
  }
}
export function selectTestBackendDidMount(state: StateVariables): boolean {
  return state.testBackendStateVar.didMount;
}

//ai page
export function selectAiPageDidMount(state: StateVariables): boolean {
  return state.aiPageStateVar.didMount;
}
export function selectAiPageAnswer(state: StateVariables): string {
  return state.aiPageStateVar.answer;
}
//recipe api
export function selectRecipeApiDidMount(state: StateVariables): boolean {
  return state.recipeApiStateVar.didMount;
}
export function selectRecipeApiRecipe(state: StateVariables): string {
  return state.recipeApiStateVar.apiRecipe;
}
export function selectRecipeApiDropDownRecipe(state: StateVariables): string {
  return state.recipeApiStateVar.apiDropDownRecipe;
}
export function selectRecipeApiCustomRecipe(state: StateVariables): string {
  return state.recipeApiStateVar.apiCustomRecipe;
}
export function selectRecipeApiStatus(state: StateVariables): string {
  return state.recipeApiStateVar.apiStatus;
}
export function selectRecipeApiIngredients(state: StateVariables): string {
  return state.recipeApiStateVar.apiIngredients;
}
export function selectValidIngredients(state: StateVariables): string {
  return state.recipeApiStateVar.validIngredients;
}

//recipe ai
export function selectRecipeAiUserQuestion(state: StateVariables): string {
  return state.recipeAiStateVar.userQuestion;
}
export function selectRecipeAiUserContext(state: StateVariables): string {
  return state.recipeAiStateVar.userContext;
}
export function selectRecipeAiQuestionResponse(state: StateVariables): string {
  return state.recipeAiStateVar.questionResponse;
}

//trivia api
export function selectTriviaApiDidMount(state: StateVariables): boolean {
  return state.triviaApiStateVar.didMount;
}
export function selectTriviaApiTrivia(state: StateVariables): string {
  return state.triviaApiStateVar.apiTrivia;
}
export function selectTriviaApiStatus(state: StateVariables): string {
  return state.triviaApiStateVar.apiStatus;
}

//dynamo auth
export function selectDynamoAuthDidMount(state: StateVariables): boolean {
  return state.dynamoAuthStateVar.didMount;
}
export function selectDynamoAuthResponse(state: StateVariables): boolean {
  return state.dynamoAuthStateVar.authResponse;
}

//create account
export function selectCreateEmail(state: StateVariables): string {
  return state.createAccountState.email;
}
export function selectCreateUserName(state: StateVariables): string {
  return state.createAccountState.userName;
}
export function selectCreatePassword(state: StateVariables): string {
  return state.createAccountState.password;
}
export function selectCreateName(state: StateVariables): string {
  return state.createAccountState.name;
}
export function selectCreatePhone(state: StateVariables): string {
  return state.createAccountState.phone;
}
export function selectCreateHfToken(state: StateVariables): string {
  return state.createAccountState.hfToken;
}
export function selectCreateOaToken(state: StateVariables): string {
  return state.createAccountState.oaToken;
}
export function selectCreateResponseMessage(state: StateVariables): string {
  return state.createAccountState.responseMessage;
}
export function selectCreateReadMessage(state: StateVariables): string {
  return state.createAccountState.readResponse;
}
export function selectCreateShowModal(state: StateVariables): boolean {
  return state.createAccountState.showModal;
}
export function selectCreateIsSignedIn(state: StateVariables): boolean {
  return state.createAccountState.isSignedIn;
}
export function selectCreateDidMount(state: StateVariables): boolean {
  return state.createAccountState.didMount;
}

//read account

export function selectReadEmail(state: StateVariables): string {
  return state.readAccountState.email;
}
export function selectReadPassword(state: StateVariables): string {
  return state.readAccountState.password;
}
export function selectReadResponseMessage(state: StateVariables): string {
  return state.readAccountState.responseMessage;
}

//update account
export function selectUpdateEmail(state: StateVariables): string {
  return state.updateAccountState.email;
}
export function selectUpdatePassword(state: StateVariables): string {
  return state.updateAccountState.password;
}
export function selectUpdateName(state: StateVariables): string {
  return state.updateAccountState.name;
}
export function selectUpdatePhone(state: StateVariables): string {
  return state.updateAccountState.phone;
}
export function selectUpdateHfToken(state: StateVariables): string {
  return state.updateAccountState.hfToken;
}
export function selectUpdateOaToken(state: StateVariables): string {
  return state.updateAccountState.oaToken;
}
export function selectUpdateResponseMessage(state: StateVariables): string {
  return state.updateAccountState.responseMessage;
}
export function selectUpdateShowModal(state: StateVariables): boolean {
  return state.updateAccountState.showModal;
}
export function selectUpdateDidMount(state: StateVariables): boolean {
  return state.updateAccountState.didMount;
}

//account profile
export function selectProfileEmail(state: StateVariables): string {
  return state.accountProfileState.email;
}
export function selectProfilePassword(state: StateVariables): string {
  return state.accountProfileState.password;
}
export function selectProfileName(state: StateVariables): string {
  return state.accountProfileState.name;
}
export function selectProfilePhone(state: StateVariables): string {
  return state.accountProfileState.phone;
}
export function selectProfileHfToken(state: StateVariables): string {
  return state.accountProfileState.hfToken;
}
export function selectProfileOaToken(state: StateVariables): string {
  return state.accountProfileState.oaToken;
}
export function selectProfileResponseMessage(state: StateVariables): string {
  return state.accountProfileState.responseMessage;
}
export function selectProfileShowModal(state: StateVariables): boolean {
  return state.accountProfileState.showModal;
}
export function selectProfileDidMount(state: StateVariables): boolean {
  return state.accountProfileState.didMount;
}

//delete account

export function selectDeleteEmail(state: StateVariables): string {
  return state.deleteAccountState.email;
}
export function selectDeletePassword(state: StateVariables): string {
  return state.deleteAccountState.password;
}
export function selectDeleteResponseMessage(state: StateVariables) {
  return state.deleteAccountState.responseMessage;
}

//authUser
export function selectAuthUserEmail(state: StateVariables): string {
  return state.authUserState.email;
}
export function selectAuthUserUserName(state: StateVariables): string {
  return state.authUserState.userName;
}
export function selectAuthUserPassword(state: StateVariables): string {
  return state.authUserState.password;
}
export function selectAuthUserName(state: StateVariables): string {
  return state.authUserState.name;
}
export function selectAuthUserPhone(state: StateVariables): string {
  return state.authUserState.phone;
}
export function selectAuthUserHfToken(state: StateVariables): string {
  return state.authUserState.hfToken;
}
export function selectAuthUserOaToken(state: StateVariables): string {
  return state.authUserState.oaToken;
}
export function selectAuthUserResponseMessage(state: StateVariables): string {
  return state.authUserState.responseMessage;
}
export function selectAuthUserReadMessage(state: StateVariables): string {
  return state.authUserState.readResponse;
}
export function selectAuthUserIsSignedIn(state: StateVariables): boolean {
  return state.authUserState.isSignedIn;
}

//sign in area

export function selectSignInIsSignedIn(state: StateVariables): boolean {
  return state.isSignedInState.isSignedIn;
}
export function selectSignInDidMount(state: StateVariables): boolean {
  return state.isSignedInState.didMount;
}
export function selectSignInButtonText(state: StateVariables): string {
  return state.isSignedInState.buttonText;
}
export function selectSignInButtonClass(state: StateVariables): string {
  return state.isSignedInState.buttonClass;
}
export function selectSignInShowModal(state: StateVariables): boolean {
  return state.isSignedInState.showModal;
}
export function selectSignInEmail(state: StateVariables): string {
  return state.isSignedInState.email;
}
export function selectSignInPassword(state: StateVariables): string {
  return state.isSignedInState.password;
}
export function selectSignInError(state: StateVariables): string {
  return state.isSignedInState.error;
}

//global account
export function selectGlobalAccount(state: StateVariables): Account {
  return state.globalAccountState.account;
}
