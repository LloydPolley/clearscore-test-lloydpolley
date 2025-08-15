import type { ElectoralRollType } from "../../types";

export const checkElectoralRoll = (
  electoralRoll: ElectoralRollType
): boolean => {
  const registeredOnRoll = electoralRoll.some(
    (entry: { current: boolean }) => entry.current
  );
  return registeredOnRoll;
};
