export type RankedEntry = {
  at(arg0: number): {
    queueType: any;
    tier: any;
    rank: any;
    puuid: any;
    leaguePoints: any;
    wins: any;
    losses: any;
    veteran: any;
    inactive: any;
    freshBlood: any;
    hotStreak: any;
  };
  leagueId: string;
  queueType: "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | string;
  tier:
    | "IRON"
    | "BRONZE"
    | "SILVER"
    | "GOLD"
    | "PLATINUM"
    | "DIAMOND"
    | "MASTER"
    | "GRANDMASTER"
    | "CHALLENGER";
  rank: "I" | "II" | "III" | "IV";
  puuid: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
};
