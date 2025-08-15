import { describe, it, expect } from "vitest";
import { checkCreditUtil } from "./checkCreditUtil";

describe("checkCreditUtil", () => {
  it("returns true when credit utilization > 50%", () => {
    const accounts = [
      {
        accountCategory: "credit_cards",
        overview: {
          balance: { amount: 600 },
          limit: { amount: 1000 },
        },
      },
    ];

    expect(checkCreditUtil(accounts)).toBe(true);
  });

  it("returns false when credit utilization ≤ 50%", () => {
    const accounts = [
      {
        accountCategory: "credit_cards",
        overview: {
          balance: { amount: 300 },
          limit: { amount: 1000 },
        },
      },
    ];

    expect(checkCreditUtil(accounts)).toBe(false);
  });

  it("returns false when no credit card found", () => {
    const accounts = [
      {
        accountCategory: "current_accounts",
        overview: { balance: { amount: 300 }, limit: { amount: 1000 } },
      },
    ];
    expect(checkCreditUtil(accounts)).toBe(false);
  });

  it("returns false when accounts is null/undefined", () => {
    expect(checkCreditUtil([])).toBe(false);
  });
});
