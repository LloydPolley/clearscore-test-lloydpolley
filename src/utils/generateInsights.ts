import { checkCreditUtil } from "./creditUtils/checkCreditUtil";
import { checkElectoralRoll } from "./electoralRoll/checkElectoralRoll";
import { checkPublicInfo } from "./publicInfo/checkPublicInfo";
import type { InsightData, InsightType } from "../types";

export const generateInsights = (data: InsightData): InsightType[] => {
  const { accounts, personal } = data;

  console.log("data", data);
  return [
    {
      title: "Electoral roll",
      body: "Being on the electoral roll can improve your score",
      impact: "Medium Impact",
      onTrack: checkElectoralRoll(personal?.electoralRoll),
    },
    {
      title: "Public information",
      body: "Bankruptcies and individual voluntary arrangements can damage your score",
      impact: "High Impact",
      onTrack: checkPublicInfo(personal?.publicInfo),
    },
    {
      title: "Credit utilisation",
      body: "Using more than 50% of your available credit can damage your score",
      impact: "Medium Impact",
      onTrack: checkCreditUtil(accounts),
    },
  ];
};
