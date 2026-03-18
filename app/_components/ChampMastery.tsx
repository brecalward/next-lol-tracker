import { Mastery } from "../_types/Mastery";

type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  tags: string[];
  partype: string;
  image: {
    full: string;
  };
};

function ChampionCard({ champ, allChampData }: any) {
  const championsArray: Champion[] = Object.values(allChampData?.data ?? {});

  const currentChampData = championsArray.find(
    (champion) => champ.championId === Number(champion.key),
  );

  if (!currentChampData) return null;

  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/16.5.1/img/champion/${currentChampData.image.full}`;

  return (
    <div className="bg-slate-800 text-white rounded-xl p-3 shadow-md hover:scale-[1.03] transition duration-200">
      <img
        src={imageUrl}
        alt={currentChampData.name}
        className="w-full rounded-lg mb-2"
      />

      <h2 className="text-sm font-bold leading-tight">
        {currentChampData.name}
      </h2>
      <h3 className="text-xs text-gray-400 italic mb-1">
        {currentChampData.title}
      </h3>

      {/* <p className="text-xs mb-2 line-clamp-2">{currentChampData.blurb}</p> */}

      <div className="text-[11px] space-y-1">
        <div>
          <span className="font-semibold">Tags:</span>{" "}
          {currentChampData.tags.join(", ")}
        </div>
        <div>
          <span className="font-semibold">Resource:</span>{" "}
          {currentChampData.partype}
        </div>
        <div>
          <span className="font-semibold">Lvl:</span> {champ.championLevel}
        </div>
        <div>
          <span className="font-semibold">Pts:</span>{" "}
          {champ.championPoints.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

type DisplayProps = {
  mastery?: Mastery;
  champInfo: any;
};

export default function ChampionMastery({ mastery, champInfo }: DisplayProps) {
  return (
    <div className="flex justify-center">
      <div className="w-[75%] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 p-4">
        {mastery?.map((champ: any) => (
          <ChampionCard
            key={champ.championId}
            champ={champ}
            allChampData={champInfo}
          />
        ))}
      </div>
    </div>
  );
}
