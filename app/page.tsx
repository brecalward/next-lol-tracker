import Image from "next/image";
import InitialUserForm from "./_components/InitialUserForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center font-sans">
      <main className="w-full max-w-5xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
          {/* Left: Hero Text */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Welcome to <span className="text-blue-600">LoL Tracker</span>
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Track player stats, match history, and performance insights using
              Riot’s API.
            </p>

            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Enter your Riot ID to get started.
            </p>
          </div>

          {/* Right: Form Card */}
          <div className="w-full max-w-md rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm p-6">
            <InitialUserForm />
          </div>
        </div>
      </main>
    </div>
  );
}
