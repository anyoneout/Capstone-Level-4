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
    password: "",
    name: "",
    phone: "",
    responseMessage: "",
    readResponse: "",
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
    responseMessage: "",
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
    showModal: null,
  },
};

export type StateVariables = typeof stateVariables;
