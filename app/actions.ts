"use server";
import { redirect } from "next/navigation";

export async function fetchPuuid(prevState: any, formData: FormData) {
  const gameName = formData.get("gameName") as string;
  const tagLine = formData.get("tagLine") as string;
  const API = process.env.API_KEY;

  // now you have both values
  const res = await fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${API}`
  );
  const data = await res.json();
  console.log(data);

  const puuid = data.puuid;

  if (!puuid) return "Summoner not found.";
  redirect(`/dashboard/${puuid}`);
}
