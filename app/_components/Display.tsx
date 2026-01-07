import type { RankedEntry } from "@/app/_types/RankedEntry";

type DisplayProps = {
  data?: RankedEntry;
};

export default function Display({ data }: DisplayProps) {
  if (!data) {
    return (
      <div className="flex items-center justify-center h-48 text-sm text-gray-400">
        No ranked data available
      </div>
    );
  }

  const {
    queueType,
    tier,
    rank,
    leaguePoints,
    wins,
    losses,
    veteran,
    inactive,
    freshBlood,
    hotStreak,
  } = data.at(0);

  const totalGames = wins + losses;
  const winRate = totalGames ? Math.round((wins / totalGames) * 100) : 0;

  const tierGradients: Record<string, string> = {
    IRON: "from-gray-500 to-gray-700",
    BRONZE: "from-orange-400 to-orange-700",
    SILVER: "from-gray-200 to-gray-400",
    GOLD: "from-yellow-300 to-yellow-500",
    PLATINUM: "from-teal-300 to-teal-600",
    DIAMOND: "from-blue-400 to-indigo-600",
    MASTER: "from-purple-500 to-purple-800",
    GRANDMASTER: "from-red-500 to-red-800",
    CHALLENGER: "from-pink-500 to-fuchsia-700",
  };

  return (
    <div className="relative max-w-md mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 text-white shadow-2xl">
      {/* Tier Banner */}
      <div
        className={`p-6 bg-gradient-to-r ${tierGradients[tier]} flex justify-between items-center`}
      >
        <div>
          <p className="text-xs uppercase tracking-widest opacity-80">
            {queueType?.replaceAll("_", " ")}
          </p>
          <h1 className="text-2xl font-extrabold">
            {tier} {rank}
          </h1>
        </div>

        <div className="text-right">
          <p className="text-sm opacity-80">LP</p>
          <p className="text-3xl font-black">{leaguePoints}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6 grid grid-cols-3 gap-4 text-center">
        <Stat label="Wins" value={wins} />
        <Stat label="Losses" value={losses} />
        <Stat label="Win Rate" value={`${winRate}%`} highlight />
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 flex items-center justify-between text-xs text-zinc-300">
        <span>{totalGames} Games Played</span>

        <div className="flex gap-2 text-lg">
          {hotStreak && <span title="Hot Streak">🔥</span>}
          {veteran && <span title="Veteran">🎖️</span>}
          {freshBlood && <span title="Fresh Blood">🆕</span>}
          {inactive && <span title="Inactive">⏸️</span>}
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string | number;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 ${
        highlight ? "bg-white/10 backdrop-blur font-bold" : "bg-black/20"
      }`}
    >
      <div className="text-xs uppercase tracking-wider text-zinc-400">
        {label}
      </div>
      <div className="text-2xl font-extrabold">{value}</div>
    </div>
  );
}
