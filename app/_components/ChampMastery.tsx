import { Mastery } from "../_types/Mastery";

function ChampionCard({ champ }: any) {
  return <div>Champion ID: {champ.championId}</div>;
}

type DisplayProps = {
  mastery?: Mastery;
  champInfo: any;
};

export default function ChampionMastery({ mastery, champInfo }: DisplayProps) {
  console.log(mastery);
  console.log(typeof mastery);
  for (const champ in mastery) {
    console.log(mastery[champ].championId);
  }
  console.log(champInfo);
  return (
    <div className="m-y-10">
      {mastery?.map((champ: any) => (
        <ChampionCard champ={champ} />
      ))}
    </div>
  );
}
