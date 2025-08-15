import type { AccountsType } from "../../types";

export const checkCreditUtil = (accounts: AccountsType[]): boolean => {
  const creditCard = accounts?.find(
    (account: AccountsType) => account?.accountCategory === "credit_cards"
  );
  const amount = creditCard?.overview?.balance?.amount ?? 0;
  const limit = creditCard?.overview?.limit?.amount ?? 0;
  return amount / limit > 0.5;
};
