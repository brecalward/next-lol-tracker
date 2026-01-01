import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-5xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
				<div className="flex gap-60">
					<h1>Welcome to LOL Tracker</h1>
					<div className="flex h-8">
						<label className="mr-3" htmlFor="username-input">
							Username
						</label>
						<input
							className="w-40 bg-white text-black mr-8"
							id="username-input"
						/>
						<label className="mr-3" htmlFor="tag-input">
							Tag
						</label>
						<input className="w-40 bg-white text-black" id="tag-input" />
						<button>search</button>
					</div>
				</div>
			</main>
		</div>
	);
}
