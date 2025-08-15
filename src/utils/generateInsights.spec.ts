import { describe, it, expect, vi } from "vitest";
import { generateInsights } from "./generateInsights";
import * as creditUtil from "./creditUtils/checkCreditUtil";
import * as electoralRoll from "./electoralRoll/checkElectoralRoll";
import * as publicInfo from "./publicInfo/checkPublicInfo";

describe("generateInsights", () => {
  const mockAccounts = [
    {
      accountCategory: "credit_cards",
      overview: { balance: { amount: 100 }, limit: { amount: 500 } },
    },
  ];

  const mockPersonal = {
    electoralRoll: [{ current: true }],
    publicInfo: { courtAndInsolvencies: [{ type: "court_judgement" }] },
  };

  it("returns correct insights with onTrack values", () => {
    vi.spyOn(electoralRoll, "checkElectoralRoll").mockReturnValue(true);
    vi.spyOn(publicInfo, "checkPublicInfo").mockReturnValue(false);
    vi.spyOn(creditUtil, "checkCreditUtil").mockReturnValue(true);

    const result = generateInsights({
      accounts: mockAccounts,
      personal: mockPersonal,
    });

    expect(result).toHaveLength(3);

    expect(result[0]).toEqual({
      title: "Electoral roll",
      body: "Being on the electoral roll can improve your score",
      impact: "Medium Impact",
      onTrack: true,
    });

    expect(result[1]).toEqual({
      title: "Public information",
      body: "Bankruptcies and individual voluntary arrangements can damage your score",
      impact: "High Impact",
      onTrack: false,
    });

    expect(result[2]).toEqual({
      title: "Credit utilisation",
      body: "Using more than 50% of your available credit can damage your score",
      impact: "Medium Impact",
      onTrack: true,
    });
  });
});
