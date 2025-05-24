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

  testBackendStateVar: {
    didMount: false,
  },

  aiPageStateVar: {
    didMount: false,
    answer: "",
  },

  //dynamo
  dynamoAuthStateVar: {
    didMount: false,
    authResponse: false,
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

  triviaApiStateVar: {
    didMount: false,
    apiTrivia: "",
    apiStatus: "",
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

  recipeApiStateVar: {
    didMount: false,
    apiRecipe: "",
    apiStatus: "",
    apiIngredients: "",
    validIngredients: "",
  },

  globalAccountState: {
    account: {
      email: "",
      oaToken: "",
      hfToken: "",
      name: "",
      phone: "",
      password: "",
    },
  },
};

export type StateVariables = typeof stateVariables;
