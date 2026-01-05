import Display from "@/app/_components/Display";
import Loading from "@/app/_components/Loading";
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
    `https://na1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  console.log(data);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Display data={data} />
      </Suspense>
    </>
  );
}
