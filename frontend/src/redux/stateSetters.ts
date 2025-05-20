import { StateVariables } from "./stateVariables";

//didMount
export const stateSetters = {
  aboutDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.aboutStateVar.didMount = newValue;
  },
  bfPageDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.aboutStateVar.didMount = newValue;
  },
  examplesDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.examplesStateVar.didMount = newValue;
  },
  homeDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.homeStateVar.didMount = newValue;
  },
  oaPageDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.oaPageStateVar.didMount = newValue;
  },
  awsFormsDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.awsFormsStateVar.didMount = newValue;
  },
  handleRefreshDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.handleRefreshState.didMount = newValue;
  },
  testBackendDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.testBackendStateVar.didMount = newValue;
  },

  //ai page
  aiPageDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.aiPageStateVar.didMount = newValue;
  },
  aiPageAnswer: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.aiPageStateVar.answer = newValue;
  },

  // trivia api
  triviaApiDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.triviaApiStateVar.didMount = newValue;
  },
  triviaApiTrivia: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.triviaApiStateVar.apiTrivia = newValue;
  },
  triviaApiStatus: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.triviaApiStateVar.apiStatus = newValue;
  },

  // recipe api
  recipeApiDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.recipeApiStateVar.didMount = newValue;
  },
  recipeApiRecipe: function (state: StateVariables, action: Action) {
    const newValue = action.payload;

    state.recipeApiStateVar.apiRecipe = newValue;
  },
  recipeApiStatus: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.recipeApiStateVar.apiStatus = newValue;
  },
  recipeApiIngredients: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.recipeApiStateVar.apiIngredients = newValue;
  },
  //dynamo auth
  dynamoAuthDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.dynamoAuthStateVar.didMount = newValue;
  },
  dynamoAuthResponse: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.dynamoAuthStateVar.authResponse = newValue;
  },

  //create account
  createEmail: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.email = newValue;
  },
  createUserName: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.userName = newValue;
  },
  createPassword: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.password = newValue;
  },
  createName: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.name = newValue;
  },
  createPhone: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.phone = newValue;
  },
  createHfToken: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.hfToken = newValue;
  },
  createOaToken: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.oaToken = newValue;
  },
  createResponseMessage: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.responseMessage = newValue;
  },
  createReadResponse: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.readResponse = newValue;
  },
  createShowModal: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.createAccountState.showModal = newValue;
  },
  createIsSignedIn: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.createAccountState.isSignedIn = newValue;
  },
  createDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.createAccountState.didMount = newValue;
  },

  //read account
  readEmail: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.readAccountState.email = newValue;
  },
  readPassword: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.readAccountState.password = newValue;
  },
  readResponseMessage: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.readAccountState.responseMessage = newValue;
  },

  //update account
  updateEmail: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.updateAccountState.email = newValue;
  },
  updatePassword: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.updateAccountState.password = newValue;
  },
  updateName: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.updateAccountState.name = newValue;
  },
  updatePhone: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.updateAccountState.phone = newValue;
  },
  updateHfToken: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.updateAccountState.hfToken = newValue;
  },
  updateOaToken: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.updateAccountState.oaToken = newValue;
  },
  updateResponseMessage: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.updateAccountState.responseMessage = newValue;
  },
  updateShowModal: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.updateAccountState.showModal = newValue;
  },
  updateDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.updateAccountState.didMount = newValue;
  },
  //account profile
  accountProfileEmail: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.accountProfileState.email = newValue;
  },
  accountProfilePassword: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.accountProfileState.password = newValue;
  },
  accountProfileName: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.accountProfileState.name = newValue;
  },
  accountProfilePhone: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.accountProfileState.phone = newValue;
  },
  accountProfileHfToken: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.accountProfileState.hfToken = newValue;
  },
  accountProfileOaToken: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.accountProfileState.oaToken = newValue;
  },
  accountProfileResponseMessage: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.accountProfileState.responseMessage = newValue;
  },
  accountProfileShowModal: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.accountProfileState.showModal = newValue;
  },
  accountProfileDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.accountProfileState.didMount = newValue;
  },

  //delete account
  deleteEmail: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.deleteAccountState.email = newValue;
  },
  deletePassword: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.deleteAccountState.password = newValue;
  },
  deleteResponseMessage: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.deleteAccountState.responseMessage = newValue;
  },

  //sign in area
  signInDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.isSignedInState.didMount = newValue;
  },
  signInIsSignedIn: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.isSignedInState.isSignedIn = newValue;
  },
  signInButtonText: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.isSignedInState.buttonText = newValue;
  },
  signInButtonClass: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.isSignedInState.buttonClass = newValue;
  },
  signInShowModal: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.isSignedInState.showModal = newValue;
  },
  signInEmail: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.isSignedInState.email = newValue;
  },
  signInPassword: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.isSignedInState.password = newValue;
  },
  signInError: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.isSignedInState.error = newValue;
  },

  //authUser
  authUserEmail: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.authUserState.email = newValue;
  },
  authUserUserName: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.authUserState.userName = newValue;
  },
  authUserPassword: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.authUserState.password = newValue;
  },
  authUserName: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.authUserState.name = newValue;
  },
  authUserPhone: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.authUserState.phone = newValue;
  },
  authUserHfToken: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.authUserState.hfToken = newValue;
  },
  authUserOaToken: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.authUserState.oaToken = newValue;
  },
  authUserResponseMessage: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.authUserState.responseMessage = newValue;
  },

  authUserReadResponse: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.authUserState.readResponse = newValue;
  },
  authUserIsSignedIn: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.authUserState.isSignedIn = newValue;
  },

  //global account
  globalAccount: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.globalAccountState.account = newValue;
  },
};

type Action = {
  payload: string;
  type: string;
};

type ActionBoolean = {
  payload: boolean;
  type: string;
};
