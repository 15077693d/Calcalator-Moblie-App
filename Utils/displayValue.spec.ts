import { commify } from "./displayValue";

describe("commify", () => {
  it("1000->1,000", () => {
    expect(commify("1000")).toEqual("1,000");
  });
  it("1000.0->1,000.0", () => {
    expect(commify("1000.0")).toEqual("1,000.0");
  });
  it("1000.->1,000.", () => {
    expect(commify("1000.")).toEqual("1,000.");
  });
  it("1000000->1,000,000", () => {
    expect(commify("1000000")).toEqual("1,000,000");
  });
  it("1000000000->1,000,000,000", () => {
    expect(commify("1000000000")).toEqual("1,000,000,000");
  });
});
