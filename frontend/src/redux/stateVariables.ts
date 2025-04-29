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
  },

  triviaApiStateVar: {
    didMount: false,
  },

  awsFormsStateVar: {
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
    responseMessage: "",
  },

  updateAccountState: {
    email: "",
    password: "",
    responseMessage: "",
  },

  deleteAccountState: {
    email: "",
    password: "",
    responseMessage: "",
  },
};

export type StateVariables = typeof stateVariables;
