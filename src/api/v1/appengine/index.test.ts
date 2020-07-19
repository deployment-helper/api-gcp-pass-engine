import { appengineRouter } from "./index";
describe("AUTH router", () => {
  it("Module should loaded", () => {
    expect(appengineRouter).toBeTruthy();
  });
});
