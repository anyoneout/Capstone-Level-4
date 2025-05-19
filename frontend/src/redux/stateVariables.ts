export const stateVariables = {
  aboutStateVar: {
    didMount: false,
  },

  bfPageStateVar: {
    didMount: false,
  },

  examplesStateVar: {
    didMount: false,
  },

  homeStateVar: {
    didMount: false,
  },

  oaPageStateVar: {
    didMount: false,
  },

  aiPageStateVar: {
    didMount: false,
    answer: "",
  },

  testBackendStateVar: {
    didMount: false,
  },

  dynamoAuthStateVar: {
    didMount: false,
    authResponse: false,
  },

  triviaApiStateVar: {
    didMount: false,
    apiTrivia: "",
    apiStatus: "active",
  },

  awsFormsStateVar: {
    didMount: false,
  },

  handleRefreshState: {
    didMount: false,
  },
  createAccountState: {
    email: "",
    userName: "",
    password: "",
    name: "",
    phone: "",
    hfToken: "",
    oaToken: "",
    responseMessage: "",
    readResponse: "",
    showModal: false,
    isSignedIn: false,
    didMount: false,
  },

  readAccountState: {
    email: "",
    password: "",
    responseMessage: "",
  },

  updateAccountState: {
    email: "",
    password: "",
    name: "",
    phone: "",
    hfToken: "",
    oaToken: "",
    responseMessage: "",
    showModal: false,
    didMount: false,
  },

  accountProfileState: {
    email: "",
    password: "",
    name: "",
    phone: "",
    hfToken: "",
    oaToken: "",
    responseMessage: "",
    showModal: false,
    didMount: false,
  },

  deleteAccountState: {
    email: "",
    password: "",
    responseMessage: "",
  },

  isSignedInState: {
    isSignedIn: false,
    didMount: false,
    buttonText: "Sign In",
    buttonClass: "sign-in-btn",
    showModal: false,
    email: "",
    password: "",
    error: "",
  },

  signUpState: {
    email: "",
    password: "",
    response: "",
  },

  globalAccountState: {
    account: null,
  },

  authUserState: {
    email: "",
    userName: "",
    password: "",
    name: "",
    phone: "",
    hfToken: "",
    oaToken: "",
    responseMessage: "",
    readResponse: "",
    isSignedIn: false,
  },
};

export type StateVariables = typeof stateVariables;
