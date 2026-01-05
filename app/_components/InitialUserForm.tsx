"use client";

import { fetchPuuid } from "@/app/actions";
import { useActionState, useState } from "react";

export default function InitialUserForm() {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [state, formAction, isPending] = useActionState(fetchPuuid, null);

  return (
    <form action={formAction} className="space-y-5">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Find a Summoner
      </h2>

      {/* Username */}
      <div className="space-y-1">
        <label
          htmlFor="username-input"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Game Name
        </label>
        <input
          id="username-input"
          name="gameName"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          placeholder="Faker"
          required
          className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tag */}
      <div className="space-y-1">
        <label
          htmlFor="tag-input"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Tagline
        </label>
        <input
          id="tag-input"
          name="tagLine"
          value={tagLine}
          onChange={(e) => setTagLine(e.target.value)}
          placeholder="KR1"
          required
          className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {isPending ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
