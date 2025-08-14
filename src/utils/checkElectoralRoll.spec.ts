import { describe, it, expect } from "vitest";
import { checkElectoralRoll } from "./checkElectoralRoll";

describe("checkElectoralRoll", () => {
  it("returns true when first electoral roll entry is current", () => {
    const electoralRoll = [{ current: true }];

    expect(checkElectoralRoll(electoralRoll)).toBe(true);
  });

  it("returns false when first electoral roll entry is not current", () => {
    const electoralRoll = [{ current: false }];

    expect(checkElectoralRoll(electoralRoll)).toBe(false);
  });
});
