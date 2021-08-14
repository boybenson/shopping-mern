import { generateToken } from "./generate-token";

describe("tests for the generate token helper function", () => {
  it("should generate a valid jwt token given an id", () => {
    let actual = generateToken("546272625dgvsrahav36");
    let expected = "tessttt";
    expect(actual).toBe(expected);
  });
});
