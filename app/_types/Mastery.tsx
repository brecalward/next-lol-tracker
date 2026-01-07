export type Mastery = {
  puuid: string;
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  markRequiredForNextLevel: number;
  tokensEarned: number;
  championSeasonMilestone: number;
  nextSeasonMilestone: {
    requireGradeCounts: object[];
    rewardMarks: number;
    bonus: boolean;
    totalGamesRequires: number;
  };
  [key: string]: any;
};
