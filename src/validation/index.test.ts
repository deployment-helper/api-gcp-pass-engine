import { reqCreateApplication, reqGetApplication } from "./index";
describe("Validation Tests", () => {
  test("reqCreateApplication should loaded", () => {
    expect(reqCreateApplication).toBeTruthy();
  });
  test("reqGetApplication should loaded", () => {
    expect(reqGetApplication).toBeTruthy();
  });
});
