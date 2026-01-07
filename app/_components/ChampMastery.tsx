import { Mastery } from "../_types/Mastery";

type DisplayProps = {
  mastery?: Mastery;
};

export default function ChampionMastery({ mastery }: DisplayProps) {
  console.log(mastery);
  console.log(typeof mastery);
  for (const champ in mastery) {
    console.log(mastery[champ].championId);
  }
  return (
    <div>
      {/* <p>Champion ID: {championId}</p>
      <p>Level: {championLevel}</p>
      <p>Points: {championPoints}</p>
      <p>Tokens: {tokensEarned}</p>
      <p>Reward Marks: {rewardMarks}</p>
      <p>Bonus: {bonus ? "Yes" : "No"}</p>
      <p>Total Games Required: {totalGamesRequires}</p> */}
    </div>
  );
}
