import { StateVariables } from "./stateVariables";

//didMount
export const stateSetters = {
  aboutDidMount: function (state: StateVariables, action: ActionBoolean) {
    debugger;
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
  createResponseMessage: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.responseMessage = newValue;
  },
  createReadResponse: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.createAccountState.readResponse = newValue;
  },

  //read account
  readEmail: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.readAccountState.email = newValue;
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
  updateResponseMessage: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.updateAccountState.responseMessage = newValue;
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
  signInShowModal: function (state: StateVariables, action) {
    const newValue = action.payload;
    state.isSignedInState.showModal = newValue;
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
