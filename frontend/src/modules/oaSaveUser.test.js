
import { beforeEach, describe, expect, it } from "@jest/globals";
import { oaSaveUser } from "./oaSaveUser";

describe("oaSaveUser", () => {
  //beforeEach is used to simulate mock data for each test. Also used here to clear localStorage between tests and serves as the Arrange phase for each test.
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="nameInput" value="Chris Ali">
      <input id="emailInput" value="chrisdafur@gmail.com">
      <input id="openAiTokenInput" value="exampleToken">
      <div id="userNameHTML"></div>
      <div id="userEmailHTML"></div>
    `;
    localStorage.clear();
  });
  //ACT
  it("should save user data to local storage", () => {
    oaSaveUser();
    //ASSERT
    expect(localStorage.getItem("userName")).toBe("Chris Ali");
    expect(localStorage.getItem("userEmail")).toBe("chrisdafur@gmail.com");
    expect(localStorage.getItem("oaiToken")).toBe("exampleToken");
  });
  //ACT
  it("should update UI with stored user data", () => {
    oaSaveUser();
    //ASSERT
    expect(document.getElementById("userNameHTML").innerHTML).toBe("Chris Ali");
    expect(document.getElementById("userEmailHTML").innerHTML).toBe("chrisdafur@gmail.com");
  });
});
