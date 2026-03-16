import Display from "@/app/_components/Display";
import Loading from "@/app/_components/Loading";
import ChampMastery from "@/app/_components/ChampMastery";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{
    puuid: string;
  }>;
};

export default async function page({ params }: PageProps) {
  const { puuid } = await params;
  console.log(puuid);

  const res = await fetch(
    `https://na1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}?api_key=${process.env.API_KEY}`,
  );
  const data = await res.json();
  console.log(data);

  const response = await fetch(
    `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${process.env.API_KEY}`,
  );
  const championMasteryData = await response.json();

  console.log(championMasteryData);

  async function fetchChampInfoFromDataDragon() {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/16.5.1/data/en_US/champion.json",
    );
    const data = res.json();
    return data;
  }

  const champInfo = await fetchChampInfoFromDataDragon();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Display data={data} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ChampMastery mastery={championMasteryData} champInfo={champInfo} />
      </Suspense>
    </>
  );
}
