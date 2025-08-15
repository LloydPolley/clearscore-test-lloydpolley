import { describe, it, expect } from "vitest";
import { checkPublicInfo } from "./checkPublicInfo";

describe("checkPublicInfo", () => {
  it("returns true when user has no court and insolvency", () => {
    const publicInfo = {
      courtAndInsolvencies: [],
    };

    expect(checkPublicInfo(publicInfo)).toBe(true);
  });

  it("returns false when user has court and insolvency", () => {
    const publicInfo = {
      courtAndInsolvencies: [{ type: "court" }, { type: "insolvency" }],
    };

    expect(checkPublicInfo(publicInfo)).toBe(false);
  });
});
