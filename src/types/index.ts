export type InsightData = {
  accounts: AccountsType[];
  personal: {
    electoralRoll: ElectoralRollType;
    publicInfo: PublicInfoType;
  };
};

export type InsightType = {
  title: string;
  body: string;
  impact: string;
  onTrack: boolean;
};

export type AccountsType = {
  accountCategory: string;
  overview: {
    balance: {
      amount: number;
    };
    limit: {
      amount: number;
    };
  };
};

export type ElectoralRollType = {
  current: boolean;
}[];

export type PublicInfoType = {
  courtAndInsolvencies: {
    type: string;
  }[];
};
