import type { RankedEntry } from "@/app/_types/RankedEntry";

type DisplayProps = {
  data?: RankedEntry;
};

export default function Display({ data }: DisplayProps) {
  if (!data) {
    return (
      <div className="p-6 text-center text-gray-500">
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
  const winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;

  // Map tier to color
  const tierColors: Record<string, string> = {
    IRON: "bg-gray-400 text-white",
    BRONZE: "bg-orange-500 text-white",
    SILVER: "bg-gray-300 text-black",
    GOLD: "bg-yellow-400 text-black",
    PLATINUM: "bg-teal-400 text-white",
    DIAMOND: "bg-blue-500 text-white",
    MASTER: "bg-purple-600 text-white",
    GRANDMASTER: "bg-red-600 text-white",
    CHALLENGER: "bg-pink-600 text-white",
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold tracking-wide">
          {queueType?.replaceAll("_", " ")}
        </h1>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${tierColors[tier]}`}
        >
          {tier} {rank}
        </span>
      </div>

      <p className="text-gray-600 mb-4 font-medium">{leaguePoints} LP</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Stat label="Wins" value={wins} />
        <Stat label="Losses" value={losses} />
        <Stat label="Win Rate" value={`${winRate}%`} />
        <Stat label="Games" value={totalGames} />
      </div>

      {/* Status Badges */}
      <div className="flex flex-wrap gap-2">
        {hotStreak && <Badge color="red" text="🔥 Hot Streak" />}
        {veteran && <Badge color="purple" text="🎖 Veteran" />}
        {freshBlood && <Badge color="green" text="🆕 Fresh Blood" />}
        {inactive && <Badge color="gray" text="⏸ Inactive" />}
      </div>
    </div>
  );
}

// Reusable stat component
function Stat({ label, value }: { label: string; value: string | number }) {
  const displayValue =
    typeof value === "number" && Number.isNaN(value) ? "—" : value;

  return (
    <div className="p-3 bg-gray-50 rounded-lg text-center shadow-sm">
      <div className="text-gray-500 text-sm">{label}</div>
      <div className="text-lg font-bold">{displayValue}</div>
    </div>
  );
}

// Reusable badge component
function Badge({ text, color }: { text: string; color: string }) {
  const colorClasses: Record<string, string> = {
    red: "bg-red-200 text-red-800",
    green: "bg-green-200 text-green-800",
    purple: "bg-purple-200 text-purple-800",
    gray: "bg-gray-200 text-gray-800",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${colorClasses[color]}`}
    >
      {text}
    </span>
  );
}
